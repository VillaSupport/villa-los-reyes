import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext,
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
  limit,
} from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable, shareReplay, switchMap } from 'rxjs';
import { AuthService } from '../../../services/auth-service';
import { Review } from '../interfaces/reviews.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private firestore = inject(Firestore);
  private auth = inject(AuthService);
  private injector = inject(EnvironmentInjector);

  private reviewsCollection = collection(this.firestore, 'reviews');

  private limit$ = new BehaviorSubject<number>(10);

  readonly reviews$: Observable<Review[]> = this.limit$.pipe(
    switchMap((limitAmount) => {
      // La consulta se recrea cada vez que limit$ emite un nuevo valor

      const q = query(
        this.reviewsCollection,
        orderBy('createdAt', 'desc'),
        limit(limitAmount + 1), // Pedimos uno más para "espiar" si hay contenido extra
      );

      return collectionData(q, { idField: 'id' }).pipe(
        map((docs: any[]) =>
          docs.map(
            (d) =>
              ({
                ...d,
                rating: Number(d.rating) || 0,
                usefulBy: Array.isArray(d.usefulBy) ? d.usefulBy : [],
                usefulCount: Number(d.usefulCount) || 0,
                createdAt:
                  d.createdAt?.toDate?.() ??
                  (typeof d.createdAt === 'string'
                    ? new Date(d.createdAt)
                    : d.createdAt),
              }) as Review,
          ),
        ),
      );
    }),
    shareReplay(1),
  );

  loadMore(amount: number = 10) {
    this.limit$.next(this.limit$.value + amount);
  }

  get currentLimitValue() {
    return this.limit$.value;
  }

  async addReview(comment: string, rating: number) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Debes iniciar sesión para opinar.');

    // Envolvemos en el contexto de inyección para evitar el warning de "destabilize"
    return runInInjectionContext(this.injector, () => {
      const newReview = {
        userId: user.uid,
        userName: user.displayName || 'Usuario',
        userEmail: user.email || '',
        userPhoto: user.photoURL || '',
        rating: Number(rating),
        comment,
        usefulBy: [],
        usefulCount: 0,
        createdAt: new Date(), // Firebase convertirá esto a Timestamp automáticamente
      };
      return addDoc(this.reviewsCollection, newReview);
    });
  }

  async markAsUseful(reviewId: string, markUseful: boolean) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Inicia sesión primero.');

    // Usamos el injector para asegurar que TODO lo que pase dentro
    // sea reconocido por el motor de Angular
    return runInInjectionContext(this.injector, () => {
      // Obtenemos una instancia fresca de Firestore en este contexto
      const fs = inject(Firestore);
      const reviewRef = doc(fs, `reviews/${reviewId}`);

      return runTransaction(fs, async (tx) => {
        const snap = await tx.get(reviewRef);
        if (!snap.exists()) throw new Error('Reseña no encontrada.');

        const data = snap.data() as any;
        const list = Array.isArray(data.usefulBy) ? data.usefulBy : [];

        let newList: string[] = markUseful
          ? list.includes(user.uid)
            ? list
            : [...list, user.uid]
          : list.filter((id: string) => id !== user.uid);

        if (newList.length !== list.length) {
          tx.update(reviewRef, {
            usefulBy: newList,
            usefulCount: newList.length,
          });
        }
      });
    });
  }
}
