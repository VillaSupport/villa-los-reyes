import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../../services/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewsService } from '../../services/reviews-service';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { AuthReviewForm } from '../../components/auth-review-form/auth-review-form';
import { Review } from '../../interfaces/reviews.interfaces';
import { tap } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'reviews-page',
  imports: [CommonModule, FormsModule, PageHeader, AuthReviewForm,TranslatePipe],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage {

  public header = {
    title: 'HEADER.REVIEWS.TITLE',
    description:'HEADER.REVIEWS.DESCRIPTION',
  };

  readonly isLoading = signal(true);

  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  readonly user = toSignal(this.auth.user$);
  readonly stars = [1, 2, 3, 4, 5];

  visibleCount = signal(5);
  readonly step = 5;


  readonly reviews = toSignal(
    this.reviewsService.reviews$.pipe(
      tap(() => this.isLoading.set(false)) // Cuando lleguen datos, dejamos de cargar
    ), 
    { initialValue: [] }
  );

  private readonly availableAvatars = [
  '3d_avatar_1.svg',
  '3d_avatar_12.svg',
  '3d_avatar_18.svg',
  '3d_avatar_30.svg',
  '3d_avatar_8.svg',
];

// Función para obtener la foto del autor de la reseña
getReviewUserPhoto(review: Review): string {
  // 1. Intentar usar la foto que guardamos de su cuenta de Google
  if (review.userPhoto && review.userPhoto.trim() !== '') {
    return review.userPhoto;
  }

  // 2. Si no hay, usar un avatar por defecto (puedes usar el signal azaroso que ya tienes)
  return this.anonymousAvatarPath();
}

// Signal que elige uno al azar al inicializar para casos anónimos
readonly anonymousAvatarPath = signal(
  `assets/avatars/${this.availableAvatars[Math.floor(Math.random() * this.availableAvatars.length)]}`
);

  readonly skeletonArray = [1, 2, 3,4,5];

  readonly paginatedReviews = computed(() => {
    return this.reviews().slice(0, this.visibleCount());
  });

  readonly hasMore = computed(() => {
    return this.visibleCount() < this.reviews().length;
  });

  // Función para el botón "Ver más"
  loadMore() {
    this.visibleCount.update((prev) => prev + this.step);
  }

async markUseful(review: Review, markUseful: boolean) {
  const currentUser = this.user(); // Obtenemos el valor del Signal

  if (!currentUser) {
    alert('Debes iniciar sesión para votar.');
    return;
  }

  // Opcional: Evitar que el usuario vote su propia reseña
  if (review.userId === currentUser.uid) {
    alert('No puedes votar tu propia reseña.');
    return;
  }

  try {
    // IMPORTANTE: Como es una operación asíncrona en Firebase,
    // el Service ya debería manejar el runInContext como vimos antes.
    await this.reviewsService.markAsUseful(review.id, markUseful);
    
  } catch (e: any) {
    console.error('Error en markUseful:', e);
    alert('Hubo un problema al procesar tu voto. Inténtalo de nuevo.');
  }
}
  private readonly formContainer = viewChild<ElementRef>('formContainer');

  scrollToForm() {
    const element = this.formContainer()?.nativeElement;

    if (element) {
      // El timeout asegura que el navegador procese cualquier cambio de layout antes del scroll
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, 50);
    } else {
      console.warn('No se encontró el elemento para el scroll');
    }
  }

  readonly userPhoto = computed(
    () => this.user()?.photoURL || '/assets/images/avatar/avatar-default.png',
  );

  readonly userReviewDisplayName = (review: Review) => {
    return review?.userEmail?.trim() || review?.userName?.trim();
  };

  getClassStar(rating: number, starIndex: number) {
    const isFilled = rating >= starIndex;
    return isFilled ? "icon-star_fill" : "icon-star";
  }
}
