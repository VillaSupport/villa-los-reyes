import {
  Injectable,
  inject,
  EnvironmentInjector,
  runInInjectionContext,
  signal,
} from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  runTransaction,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { map, shareReplay } from 'rxjs';
import { AuthService } from './auth-service';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userEmail?: string;
  userPhoto: string;
  rating: number;
  comment: string;
  usefulCount: number;
  usefulBy: string[];
  createdAt: Date | null;
}

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private firestore = inject(Firestore);
  private auth = inject(AuthService);
  private reviewsCollection = collection(this.firestore, 'reviews');

  /** 🔹 Stream público (ahora no es privado) */
  readonly reviews$ = collectionData(
    query(this.reviewsCollection, orderBy('createdAt', 'desc')), 
    { idField: 'id' }
  ).pipe(
    map((docs: any[]) =>
      docs.map(d => ({
        ...d,
        rating: Number(d.rating) || 0,
        usefulBy: Array.isArray(d.usefulBy) ? d.usefulBy : [],
        createdAt: d.createdAt?.toDate?.() ?? (typeof d.createdAt === 'string' ? new Date(d.createdAt) : null),
      }) as Review)
    ),
    shareReplay(1)
  );

  async addReview(comment: string, rating: number) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Debes iniciar sesión para opinar.');

    const newReview = {
      userId: user.uid,
      userName: user.displayName || 'Usuario',
      userEmail: user.email || '',
      userPhoto: user.photoURL || '',
      rating,
      comment,
      usefulBy: [],
      usefulCount: 0,
      createdAt: new Date(),
    };

    return addDoc(this.reviewsCollection, newReview);
  }


  async markAsUseful(reviewId: string, markUseful: boolean) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Inicia sesión primero.');

    const reviewRef = doc(this.firestore, `reviews/${reviewId}`);
    
    // ✅ runTransaction es una función asíncrona normal, no necesita contexto de inyección especial
    return runTransaction(this.firestore, async (tx) => {
      const snap = await tx.get(reviewRef);
      if (!snap.exists()) throw new Error('Reseña no encontrada.');

      const data = snap.data() as Review;
      const list = Array.isArray(data.usefulBy) ? data.usefulBy : [];
      
      let newList = markUseful 
        ? [...new Set([...list, user.uid])] 
        : list.filter(id => id !== user.uid);

      if (newList.length !== list.length) {
        tx.update(reviewRef, { 
          usefulBy: newList, 
          usefulCount: newList.length 
        });
      }
    });
  }

}
