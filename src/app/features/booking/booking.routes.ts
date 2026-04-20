import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/booking-page/booking-page').then((m) => m.BookingPage),
  },
];
