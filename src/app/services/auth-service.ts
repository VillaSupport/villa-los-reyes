import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  authState,
  setPersistence,
  browserSessionPersistence,
  User,
  browserPopupRedirectResolver,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {
  private auth = inject(Auth);
  private platformId = inject(PLATFORM_ID);

  readonly user$: Observable<User | null> = authState(this.auth);



  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      // El resolver ayuda a lidiar con las políticas COOP del navegador
      const credential = await signInWithPopup(
        this.auth,
        provider,
        // browserPopupRedirectResolver,
      );
      return credential.user;
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        throw new Error('El navegador bloqueó la ventana. Por favor, habilita los popups.');
      }
      if (error.code === 'auth/cancelled-popup-request') {
        throw new Error('Cerraste la ventana antes de terminar.');
      }
      console.error('Error en AuthService:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
