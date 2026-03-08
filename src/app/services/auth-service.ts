import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  authState,
  setPersistence,
  browserSessionPersistence,
  User,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  readonly user$: Observable<User | null> = authState(this.auth);

  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    // En Zoneless, preferimos async/await para evitar fugas de contexto
    const credential = await signInWithPopup(this.auth, provider);
    return credential.user;
  }

 async logout(): Promise<void> {
    await signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
