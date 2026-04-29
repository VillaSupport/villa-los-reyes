import {
  Component,
  computed,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { AuthService } from '../../../../services/auth-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReviewsService } from '../../services/reviews-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import {
  getClassStar,
  getReviewUserPhoto,
  getStarColor,
  getUserDisplayName,
} from '../../../../utils/review-utils';

@Component({
  selector: 'auth-review-form',
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './auth-review-form.html',
  styleUrl: './auth-review-form.css',
})
export class AuthReviewForm {

  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  // Referencias a Utils
  readonly getStarClass = getClassStar;
  readonly getStarColor = getStarColor;

  // Estado de Usuario
  readonly user = toSignal(this.auth.user$);
  readonly isProcessingLogin = signal(false);
  readonly isInitialLoading = computed(() => this.user() === undefined);
  private readonly platformId = inject(PLATFORM_ID);
  // Estado del Formulario
  comment = signal('');
  rating = signal(5);
  readonly isSendingReview = signal(false);
  readonly isEmptyWarning = signal(false);
  private warningTimeoutId?: any;

  // Computed Properties
  readonly stars = [1, 2, 3, 4, 5];
  readonly commentLength = computed(() => this.comment().length);

  readonly userPhoto = computed(() =>
    getReviewUserPhoto(this.user(), this.platformId),
  );

  readonly anonymousAvatar = computed(() =>
    getReviewUserPhoto(null, this.platformId),
  );
  readonly userName = computed(() => getUserDisplayName(this.user()));

  readonly isButtonDisabled = computed(
    () =>
      this.isInitialLoading() ||
      this.isProcessingLogin() ||
      this.isSendingReview(),
  );

  async loginWithGoogle() {
    if (this.isProcessingLogin()) return;
    this.isProcessingLogin.set(true);
    try {
      await this.auth.loginWithGoogle();
    } catch (err) {
      console.error('Login Error:', err);
    } finally {
      this.isProcessingLogin.set(false);
    }
  }

  private triggerWarning() {
    this.isEmptyWarning.set(true);
    if (this.warningTimeoutId) clearTimeout(this.warningTimeoutId);
    this.warningTimeoutId = setTimeout(
      () => this.isEmptyWarning.set(false),
      5000,
    );
  }

  updateRating(val: number): void {
  // Verificamos si existe el usuario antes de actualizar
  if (this.user()) {
    this.rating.set(val);
  } else {
    console.warn('Acceso denegado: El usuario no está autenticado');
    // Aquí podrías disparar una alerta o abrir un modal de login
  }
}

  async sendReview() {
    if (this.isSendingReview()) return;

    if (!this.comment().trim()) {
      this.triggerWarning();
      return;
    }

    this.isSendingReview.set(true);
    try {
      await this.reviewsService.addReview(this.comment(), this.rating());
      this.comment.set('');
      this.rating.set(5);
      this.isEmptyWarning.set(false);
    } catch (e: any) {
      console.error(e.message || 'Send Error');
    } finally {
      this.isSendingReview.set(false);
    }
  }
}
