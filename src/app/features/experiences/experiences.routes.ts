import { Routes } from '@angular/router';
import { ExperiencesMainPage } from './pages/experience-main-page';
import { SectionNavService } from '../../shared/services/section-nav.service';

export const EXPERIENCE_ROUTES: Routes = [
  {
    path: '',
    // Al ponerlo aquí, TODAS las rutas hijas comparten la misma instancia
    providers: [SectionNavService], 
    children: [
      {
        path: '',
        component: ExperiencesMainPage
      },
      {
        path: ':category',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/templates/adventures-overview-template/adventures-overview-template').then(m => m.AdventuresOverviewTemplate),
          },
          {
            path: ':adventureSlug',
            loadComponent: () => import('./pages/templates/adventure-detail-template/adventure-detail-template').then(m => m.AdventureDetailTemplate),
          }
        ]
      }
    ]
  }
];