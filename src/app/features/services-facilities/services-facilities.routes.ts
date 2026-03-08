import { Routes } from '@angular/router';

export const SERVICES_FACILITIES_ROUTES: Routes = [
  {
    path: '',
    // Ahora el punto de entrada también es Lazy
    loadComponent: () => import('./pages/services-facilities-main-page')
                          .then(m => m.ServicesFacilitiesMainPage)
  },
  {
    path: 'stayBenefits',
    loadComponent: () => import('./pages/services-page/services-page')
                          .then(m => m.ServicesPage)
  },
  {
    path: 'facilities',
    // providers: [SectionNavService],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/facilities-page/facilities-page')
                              .then(m => m.FacilitiesPage)
      },
      {
        path: 'room/:id', 
        loadComponent: () => import('./pages/room-page/room-page')
                              .then(m => m.RoomPage)
      }
    ]
  }
];