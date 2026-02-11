import { Routes } from '@angular/router';
import { galleryHorseCarriage, headerExperience } from '../../config/experience-data';
import { packages } from '../../config/packages-data';

export const EXPERIENCE_ROUTES: Routes = [
  // {
  //   path: '', // Esto significa que cuando cargue el archivo, mostrará este componente
  //   component: ExperienceMain
  // },
  // {
  //   path: ':category',
  //   loadComponent: () =>
  //     import('./pages/feature-detail-viewer/feature-detail-viewer')
  //       .then(m => m.FeatureDetailViewer),
  // },
  {
    path: ':category',
    loadComponent: () =>
      import('./pages/templates/adventures-overview-template/adventures-overview-template') // El grid de "Todas las cabalgatas"
        .then(m => m.AdventuresOverviewTemplate),
  },
  {
    path: ':category/:adventureSlug',
    loadComponent: () =>
      import('./components/adventure-grid/adventure-grid') // El detalle de "Cruce de Ríos"
        .then(m => m.AdventureGrid),
  }
]
