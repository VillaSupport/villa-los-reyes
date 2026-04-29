import { 
  Component, 
  computed, 
  inject, 
  signal, 
  PLATFORM_ID, 
  ViewChild, 
  ElementRef, 
  AfterViewInit, 
  OnDestroy 
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

// Components
import { DiscoveryOfferingList } from '../../../../shared/components/discovery-offering-list/discovery-offering-list';
import { ReviewCard } from '../review-card/review-card';

// Services & Interfaces
import { ReviewsService } from '../../services/reviews-service';
import { Review } from '../../interfaces/reviews.interfaces';

// Utils
import { getReviewUserPhoto, getUserDisplayName } from '../../../../utils/review-utils';

@Component({
  selector: 'reviews-cross-list',
  standalone: true,
  imports: [DiscoveryOfferingList, ReviewCard],
  templateUrl: './reviews-cross-list.html',
  styleUrl: './reviews-cross-list.css',
})
export class ReviewsCrossList implements AfterViewInit, OnDestroy {
  @ViewChild('endAnchor') endAnchor!: ElementRef;

  private readonly reviewsService = inject(ReviewsService);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly header = {
    title: 'HEADER.REVIEWS.TITLE',
    description: 'HEADER.REVIEWS.DESCRIPTION',
  };

  readonly isLoading = signal(true);

  private readonly rawReviews = toSignal(
    this.reviewsService.reviews$.pipe(
      tap(() => this.isLoading.set(false))
    ),
    { initialValue: [] as Review[] },
  );

  readonly reviewCardsData = computed(() => {
    return this.rawReviews().map((review) => ({
      userName: getUserDisplayName(review),
      userPhoto: getReviewUserPhoto(review, this.platformId),
      rating: review.rating || 5,
      comment: review.comment || '',
    }));
  });

  ngAfterViewInit(): void {
    // Solo ejecutamos el Observer si estamos en el navegador (SSR Safe)
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  private initIntersectionObserver(): void {
  this.observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (!this.isLoading()) {
          this.reviewsService.loadMore(10);
        }
      }
    },
    {
      root: null, 
      rootMargin: '0px 600px 0px 0px', // Detectar 600px antes de que aparezca por la derecha
      threshold: 0
    }
  );

  if (this.endAnchor) {
    this.observer.observe(this.endAnchor.nativeElement);
  }
}

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}