import { Routes } from '@angular/router';
import { AboutPage } from './features/about/pages/about-page/about-page';
import { HomePage } from './features/home/pages/home-page/home-page';
import { ReviewsPage } from './features/reviews/pages/reviews-page/reviews-page';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'about', component:AboutPage },
  {
    path: 'experiences',
    loadChildren: () => import('./features/experiences/experiences.routes').then(m => m.EXPERIENCE_ROUTES)
  },

  {
    path: 'services-facilities',
    loadChildren: () => import('./features/services-facilities/services-facilities.routes').then(m => m.SERVICES_FACILITIES_ROUTES)
  },

  {
    path: 'packages',
    loadChildren: () => import('./features/packages/packages.routes').then(m => m.PACKAGE_ROUTES)
  },

  {
    path: 'booking',
    loadChildren: () => import('./features/booking/booking.routes').then(m => m.BOOKING_ROUTES)
  },


   {
    path: 'reviews',
    component: ReviewsPage
  },

  { path: '**', redirectTo: '/home' }
];
