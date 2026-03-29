// src/app/features/lab/lab.routes.ts
import { Routes } from '@angular/router';

export const LAB_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery',
        title: 'Lab | Detailed Gallery Test',
        loadComponent: () => import('./skeleton-test.component/skeleton-test.component')
          .then(m => m.SkeletonTestComponent)
      },
      {
        path:'test-gallery-component',
         loadComponent: () => import('./test-gallery-component/test-gallery-component') 
          .then(m => m.TestGalleryComponent)
      },
      {
        path: 'header',
        loadComponent: () => import('./main-header-lab-component/main-header-lab-component') 
          .then(m => m.MainHeaderLabComponent)
      },
      {
        path: 'header-test',
        loadComponent: () => import('./header-componente-test/header-componente-test') 
          .then(m => m.HeaderComponenteTest)
      },
      {
        path: 'adeventure-grid-test',
        loadComponent: () => import('./adventures-grid-test/adventrues-grid-test') 
          .then(m => m.AdventureGridTest)
      },
      {
        path: 'package-cross-test',
        loadComponent: () => import('./package-cross-test/package-cross-test') 
          .then(m => m.PackageCrossTest)
      },
      // Aquí puedes añadir más casos de prueba en el futuro
      {
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full'
      }
    ]
  }
];