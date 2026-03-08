import { Component, computed, signal, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth-service';
import { Review, ReviewsService } from '../../services/reviews-service';
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'reviews-new-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, PageHeader],
  templateUrl: './reviews-new-page.html',
  styleUrls: ['./reviews-new-page.css'],
})
export class ReviewsNewPage {
  header = {
    title: 'Reseñas y comentarios',
    description: 'Lee las reseñas de nuestros huéspedes y descubre por qué Villa Los Reyes es el lugar perfecto para tu estancia. ¡Tu opinión también cuenta!.',
  };

  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  readonly user = toSignal(this.auth.user$);

  readonly isAuthLoading = computed(() => this.user() === undefined);


  readonly reviews = toSignal(this.reviewsService.reviews$, { initialValue: [] });

  // Estado del formulario
  comment = signal('');
  rating = signal(5);
  stars = [1, 2, 3, 4, 5];

  page = signal(1);
  readonly pageSize = 5;

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.reviews().length / this.pageSize))
  );

  readonly paginatedReviews = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.reviews().slice(start, start + this.pageSize);
  });


  async loginWithGoogle() {
    try {
      // En Zoneless, las promesas directas funcionan mejor que los observables para acciones de usuario
      await this.auth.loginWithGoogle();
    } catch (err) {
      console.error('Error en Login:', err);
      alert('No se pudo iniciar sesión.');
    }
  }

  async logout() {
    await this.auth.logout();
  }

  async sendReview() {
    const currentUser = this.user();
    if (!currentUser) return;

    if (!this.comment().trim()) {
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


  async markUseful(review: Review, markUseful: boolean) {
    if (!this.user()) {
      alert('Debes iniciar sesión para votar.');
      return;
    }
    try {
      await this.reviewsService.markAsUseful(review.id, markUseful);
    } catch (e: any) {
      alert(e.message || 'Error al procesar tu voto.');
    }
  }

  changePage(delta: number) {
    const newPage = this.page() + delta;
    if (newPage >= 1 && newPage <= this.totalPages()) this.page.set(newPage);
  }

  readonly commentLength = computed(() => this.comment().length);
}
