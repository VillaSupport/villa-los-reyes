import { Routes } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth-service';
import { ReviewsService } from './features/reviews/services/reviews-service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then(
        (m) => m.HomePage,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about-page/about-page').then(
        (m) => m.AboutPage,
      ),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./features/reviews/pages/reviews-page/reviews-page').then(
        (m) => m.ReviewsPage,
      ),
  },
  {
    path: 'experiences',
    loadChildren: () =>
      import('./features/experiences/experiences.routes').then(
        (m) => m.EXPERIENCE_ROUTES,
      ),
  },

  {
    path: 'services-facilities',
    loadChildren: () =>
      import('./features/services-facilities/services-facilities.routes').then(
        (m) => m.SERVICES_FACILITIES_ROUTES,
      ),
  },

  {
    path: 'packages',
    loadChildren: () =>
      import('./features/packages/packages.routes').then(
        (m) => m.PACKAGE_ROUTES,
      ),
  },

  {
    path: 'booking',
    loadChildren: () =>
      import('./features/booking/booking.routes').then((m) => m.BOOKING_ROUTES),
  },

  { path: '**', redirectTo: '/home' },
];
