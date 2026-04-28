import { Component, computed, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

// Servicios e Interfaces
import { AuthService } from '../../../../services/auth-service';
import { ReviewsService } from '../../services/reviews-service';
import { Review } from '../../interfaces/reviews.interfaces';

// Componentes
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { AuthReviewForm } from '../../components/auth-review-form/auth-review-form';
import { getClassStar, getReviewUserPhoto, getUserDisplayName } from '../../../../utils/review-utils';

@Component({
  selector: 'reviews-page',
  imports: [ CommonModule, FormsModule, PageHeader, AuthReviewForm, TranslatePipe ],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage {
  // --- Inyecciones ---
  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);
  
  private readonly platformId = inject(PLATFORM_ID);
  

  readonly getPhoto = (review: Review) => getReviewUserPhoto(review, this.platformId);

  // Referencias a Utils para el HTML
  readonly getName = getUserDisplayName;
  readonly getStarClass = getClassStar;

  // --- Propiedades de UI ---
  readonly header = { title: 'HEADER.REVIEWS.TITLE', description: 'HEADER.REVIEWS.DESCRIPTION' };
  readonly stars = [1, 2, 3, 4, 5];
  readonly skeletonArray = [1, 2, 3, 4, 5];
  private readonly formContainer = viewChild<ElementRef>('formContainer');

  // --- Estados ---
  readonly isLoading = signal(true);
  readonly user = toSignal(this.auth.user$);
  private readonly PAGE_STEP = 5;

  // Datos reactivos desde Firebase (vienen N + 1 para control de paginación)
  private readonly rawReviews = toSignal(
    this.reviewsService.reviews$.pipe(tap(() => this.isLoading.set(false))),
    { initialValue: [] as Review[] }
  );

  readonly displayReviews = computed(() => {
    const reviews = this.rawReviews();
    const limit = this.reviewsService.currentLimitValue;
    return reviews.length > limit ? reviews.slice(0, limit) : reviews;
  });

  // Existen otros elementos si Firebase devolvió el elemento extra (N+1)
  readonly hasMore = computed(() => 
    this.rawReviews().length > this.reviewsService.currentLimitValue
  );

  loadMore() {
    this.reviewsService.loadMore(this.PAGE_STEP);
  }

  async markUseful(review: Review, markUseful: boolean) {
    const currentUser = this.user();
    if (!currentUser) return alert('Debes iniciar sesión para votar.');
    if (review.userId === currentUser.uid) return alert('No puedes votar tu propia reseña.');

    try {
      await this.reviewsService.markAsUseful(review.id, markUseful);
    } catch (e) {
      console.error('Error:', e);
    }
  }


  scrollToForm() {
    this.formContainer()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
