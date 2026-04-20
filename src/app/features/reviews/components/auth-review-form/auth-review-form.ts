import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReviewsService } from '../../services/reviews-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'auth-review-form',
  imports: [FormsModule, CommonModule,TranslatePipe],
  templateUrl: './auth-review-form.html',
  styleUrl: './auth-review-form.css',
})
export class AuthReviewForm {
  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  comment = signal('');
  rating = signal(5);

  readonly stars = [1, 2, 3, 4, 5];
  readonly user = toSignal(this.auth.user$);

  private readonly isProcessingLogin = signal(false);

  readonly isInitialLoading = computed(() => this.user() === undefined);
  // ... dentro de tu clase de componente

  readonly isButtonDisabled = computed(() => 
    this.isInitialLoading() || this.isProcessingLogin()
  );

  // Lista de los nombres de archivos que vimos en tu terminal
  private readonly availableAvatars = [
    '3d_avatar_1.svg',
    '3d_avatar_12.svg',
    '3d_avatar_18.svg',
    '3d_avatar_30.svg',
    '3d_avatar_8.svg',
  ];

  // Signal que elige uno al azar al inicializar
  readonly anonymousAvatarPath = signal(
    `assets/avatars/${this.availableAvatars[Math.floor(Math.random() * this.availableAvatars.length)]}`,
  );

  

  readonly userPhoto = computed(
    () => this.user()?.photoURL || '/assets/images/avatar/avatar-default.png',
  );

  readonly userDisplayName = computed(() => {
    const u = this.user();
    return u?.email?.trim() || u?.displayName?.trim() || 'Usuario';
  });


  getStarStyle(rating: number, starIndex: number) {
    const isFilled = rating >= starIndex;
    return {
      color: isFilled ? '#A3D0BD' : '#ccc',
      // color: isFilled ? '#F49516' : '#A3D0BD' ,
      css: `'FILL' ${isFilled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
    };
  }

  async loginWithGoogle() {
    if (this.isProcessingLogin()) return;
    this.isProcessingLogin.set(true);

    try {
      // En Zoneless, las promesas directas funcionan mejor que los observables para acciones de usuario
      await this.auth.loginWithGoogle();
    } catch (err) {
      console.error('Error en Login:', err);
      alert('No se pudo iniciar sesión.');
    }
    finally {
      // LIBERAMOS el botón pase lo que pase (éxito o error)
      this.isProcessingLogin.set(false);
    }
  }

  async sendReview() {
    const currentUser = this.user();
    if (!currentUser) return;

    const currentComment = this.comment();
    if (!currentComment.trim()) {
      alert('Por favor escribe un comentario.');
      return;
    }

    try {
      await this.reviewsService.addReview(this.comment(), this.rating());
      this.comment.set(''); // Reset de señales
      this.rating.set(5);
    } catch (e: any) {
      alert(e.message || 'Error al enviar reseña.');
    }
  }

  readonly commentLength = computed(() => this.comment().length);
}
