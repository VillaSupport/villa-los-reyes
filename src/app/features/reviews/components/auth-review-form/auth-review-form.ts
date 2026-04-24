import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReviewsService } from '../../services/reviews-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'auth-review-form',
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './auth-review-form.html',
  styleUrl: './auth-review-form.css',
})
export class AuthReviewForm {
  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  private readonly availableAvatars = [
    '3d_avatar_1.svg',
    '3d_avatar_12.svg',
    '3d_avatar_18.svg',
    '3d_avatar_30.svg',
    '3d_avatar_8.svg',
  ];

  readonly stars = [1, 2, 3, 4, 5];

  readonly user = toSignal(this.auth.user$);
  private readonly isProcessingLogin = signal(false);

  comment = signal('');
  rating = signal(5);
  readonly isSendingReview = signal(false);
  readonly isEmptyWarning = signal(false);

  private warningTimeoutId?: any;

  readonly isInitialLoading = computed(() => this.user() === undefined);

  readonly isButtonDisabled = computed(
    () => this.isInitialLoading() || this.isProcessingLogin(),
  );

  readonly anonymousAvatarPath = signal(
    `assets/avatars/${this.availableAvatars[Math.floor(Math.random() * this.availableAvatars.length)]}`,
  );

  readonly userPhoto = computed(
    () => this.user()?.photoURL || this.anonymousAvatarPath(),
  );
  readonly userDisplayName = computed(() => {
    const u = this.user();
    return u?.email?.trim() || u?.displayName?.trim() || 'Usuario';
  });

  readonly commentLength = computed(() => this.comment().length);

  private triggerPlaceholderWarning() {
    this.isEmptyWarning.set(true);

    // CORRECCIÓN: Limpiar el temporizador anterior si el usuario hace clic varias veces
    if (this.warningTimeoutId) {
      clearTimeout(this.warningTimeoutId);
    }

    this.warningTimeoutId = setTimeout(() => {
      this.isEmptyWarning.set(false);
    }, 10000);
  }

  getStarStyle(rating: number, starIndex: number) {
    const isFilled = rating >= starIndex;
    return {
      color: isFilled ? '#A3D0BD' : '#ccc',
      // color: isFilled ? '#F49516' : '#A3D0BD' ,
      css: `'FILL' ${isFilled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
    };
  }

  getClassStar(rating: number, starIndex: number) {
    const isFilled = rating >= starIndex;
    return {
      color: isFilled ? '#A3D0BD' : '#ccc',
      class : isFilled ? "icon-star_fill" : "icon-star"
    }
  }

  async loginWithGoogle() {
    if (this.isProcessingLogin()) return;
    this.isProcessingLogin.set(true);

    try {
      await this.auth.loginWithGoogle();
    } catch (err) {
      console.error('Error en Login:', err);
      alert('No se pudo iniciar sesión.');
    } finally {
      // LIBERAMOS el botón pase lo que pase (éxito o error)
      this.isProcessingLogin.set(false);
    }
  }

  async sendReview() {
    if (this.isSendingReview()) return;

    if (this.comment().trim().length === 0) {
      this.triggerPlaceholderWarning();
      return;
    }

    if (!this.user()) return;

    this.isSendingReview.set(true);
    this.isEmptyWarning.set(false);

    try {
      await this.reviewsService.addReview(this.comment(), this.rating());
      this.comment.set('');
      this.rating.set(5);
    } catch (e: any) {
      alert(e.message || 'Error al enviar reseña.');
    } finally {
      this.isSendingReview.set(false);
    }
  }
}
