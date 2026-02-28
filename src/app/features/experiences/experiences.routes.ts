import { Routes } from '@angular/router';
import { ExperiencesMainPage } from './pages/experience-main-page';
import { SectionNavService } from '../../shared/services/section-nav.service';

export const EXPERIENCE_ROUTES: Routes = [
  {
    path: '',
    component: ExperiencesMainPage
  },
  {
    path: ':category',
    // Proveedor a nivel de rama de ruta: instancia única para esta categoría
    providers: [SectionNavService], 
    children: [
      {
        path: '', // El grid de la categoría
        loadComponent: () =>
          import('./pages/templates/adventures-overview-template/adventures-overview-template')
            .then(m => m.AdventuresOverviewTemplate),
      },
      {
        path: ':adventureSlug', // El detalle de la aventura
        loadComponent: () =>
          import('./pages/templates/adventure-detail-template/adventure-detail-template')
            .then(m => m.AdventureDetailTemplate),
      }
    ]
  }
];