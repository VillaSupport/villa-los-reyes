import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ServicesFacilitiesPage } from './pages/services-facilities-page/services-facilities-page';

import { FacilitiesPage } from './pages/facilities-page/facilities-page';
import { ServicesPage } from './pages/services-page/services-page';
import { RoomBasePage } from './components/base-pages/room-base-page/room-base-page';
import { room01Data, room02Data, room03Data, room04Data, room05Data } from './config/room-data';
import { ExperiencesPage } from './pages/experiences-page/experiences-page';
import { HorsebackRidingPage } from './pages/horseback-riding-page/horseback-riding-page';
import { HikingPage } from './pages/hiking-page/hiking-page';
import { OtherExperiencesPage } from './pages/other-experiences-page/other-experiences-page';
import { CycleToursPage } from './pages/cycle-tours-page/cycle-tours-page';
import { galleryAmazingSunrise, galleryAntiquityAndNature, galleryEcologicalAgriculture, galleryEnjoyingTheSunset, galleryFascinatingLandscape, galleryFromHellToParadise, galleryHistoryCultureNature, galleryHorseCarriage, galleryHorseRiding, galleryIntenseDay, galleryLakeVisit, galleryParadiseBeach, galleryPenitenceValley, galleryPureEcology, gallerySantoTomas, gallerySunsetRide, galleryTheCalvary, galleryTheSlipperyOne, galleryThroughTheValleys, galleryTobaccoInside, galleryTrueHiking, galleryVinalesDayTrip, galleryVinalesValley, headerExperience } from './config/experience-data';
import { DiscoverPackageDefaultAll } from './presets/discover-package-default-all/discover-package-default-all';
import { PackagesPage } from './pages/packages-page/packages-page';
import { PackageBasePage } from './components/base-pages/package-base-page/package-base-page';
import { ReviewsNewPage } from './pages/reviews-new-page/reviews-new-page';
import { packages } from './config/packages-data';
import { ExperienceViewBasePage } from './components/base-pages/experience-view-base-page/experience-view-base-page';
import { aventuraNatural, headerAdventureNature, headerNatureAndTradition, headerRelaxAndBeach, headerRomanceInVinales, headerVinales360, headerVinalesExpress, headerVinalesFamily, naturalezaYTradicion, relaxYPlaya, romanceEnVinales, vinales360, vinalesEnFamilia, vinalesExpress } from './config/plans-details-data';
import { groupNavigatorProvider } from './services/group-navigator.provider';
import { ReservationSection } from './components/sections/reservation-section/reservation-section';

export const routes: Routes = [


  {
    path: 'NewExperiences',
    loadChildren: () => import('./features/experiences/experiences.routes').then(m => m.EXPERIENCE_ROUTES)
  },



  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'services-facilities', component: ServicesFacilitiesPage },
  { path: 'services-facilities/facilities', component: FacilitiesPage },
  {
    path: 'services-facilities/facilities',
    providers: [
      groupNavigatorProvider('services-facilities/facilities')
    ],
    children: [
      {
        path: 'room-01',
        loadComponent: () =>
          import('./components/base-pages/room-base-page/room-base-page')
            .then(m => m.RoomBasePage),
        data: room01Data
      },
      {
        path: 'room-02',
        loadComponent: () =>
          import('./components/base-pages/room-base-page/room-base-page')
            .then(m => m.RoomBasePage),
        data: room02Data
      },
      {
        path: 'room-03',
        loadComponent: () =>
          import('./components/base-pages/room-base-page/room-base-page')
            .then(m => m.RoomBasePage),
        data: room03Data
      },
      {
        path: 'room-04',
        loadComponent: () =>
          import('./components/base-pages/room-base-page/room-base-page')
            .then(m => m.RoomBasePage),
        data: room04Data
      },
      {
        path: 'room-05',
        loadComponent: () =>
          import('./components/base-pages/room-base-page/room-base-page')
            .then(m => m.RoomBasePage),
        data: room05Data
      }
    ]
  },
  { path: 'services-facilities/services', component: ServicesPage },
  
  
  { path: 'experiences', component: ExperiencesPage, },



  { path: 'experiences/horseback-riding', component: HorsebackRidingPage, },

  {
    path: 'experiences/horseback-riding',
    providers: [
      groupNavigatorProvider('experiences/horseback-riding')
    ],
    children: [
      {
        path: 'mountain',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryHorseRiding,
          offer: packages[1],
        },
      },
      {
        path: 'fascinating-landscape',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryFascinatingLandscape,
          offer: packages[2],
        },
      },
      {
        path: 'sunset',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: gallerySunsetRide,
          offer: packages[3],
        },
      },
      {
        path: 'penitence-valley',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryPenitenceValley,
          offer: packages[4],
        },
      },
      {
        path: 'vinales-valley',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryVinalesValley,
          offer: packages[5],
        },
      },
    ]
  },
  { path: 'experiences/hiking', component: HikingPage },


  {
    path: 'experiences/hiking',
    providers: [
      groupNavigatorProvider('experiences/hiking')
    ],
    children: [
      {
        path: 'from-hell-to-paradise',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryFromHellToParadise,
          offer: packages[0],
        },
      },
      {
        path: 'amazing-sunrise',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryAmazingSunrise,
          offer: packages[1],
        },
      },
      {
        path: 'enjoying-the-sunset',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryEnjoyingTheSunset,
          offer: packages[2],
        },
      },
      {
        path: 'true-hiking',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryTrueHiking,
          offer: packages[3],
        },
      },
      {
        path: 'antiquity-and-nature',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryAntiquityAndNature,
          offer: packages[4],
        },
      },
      {
        path: 'pure-ecology',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryPureEcology,
          offer: packages[5],
        },
      },
      {
        path: 'tobacco-inside',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryTobaccoInside,
          offer: packages[4],
        },
      },
    ]
  },
  { path: 'experiences/cycle-tours', component: CycleToursPage },
  {
    path: 'experiences/cycle-tours',
    providers: [
      groupNavigatorProvider('experiences/cycle-tours')
    ],
    children: [
      {
        path: 'the-calvary',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryTheCalvary,
          offer: packages[0],
        },
      },
      {
        path: 'the-slippery-one',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryTheSlipperyOne,
          offer: packages[1],
        },
      },
      {
        path: 'through-the-valleys',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryThroughTheValleys,
          offer: packages[2],
        },
      },
      {
        path: 'ecological-agriculture',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryEcologicalAgriculture,
          offer: packages[3],
        },
      },
      {
        path: 'lake-visit',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryLakeVisit,
          offer: packages[4],
        },
      },
    ]
  },
  { path: 'experiences/other', component: OtherExperiencesPage },
  {
    path: 'experiences/other',
    providers: [
      groupNavigatorProvider('experiences/other')
    ],
    children: [
      {
        path: 'paradise-beach',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryParadiseBeach,
          offer: packages[0],
        },
      },
      {
        path: 'intense-day',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryIntenseDay,
          offer: packages[1],
        },
      },
      {
        path: 'santo-tomas-caves',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: gallerySantoTomas,
          offer: packages[2],
        },
      },
      {
        path: 'horse-carriage',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryHorseCarriage,
          offer: packages[3],
        },
      },
      {
        path: 'vinales-day-trip',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryVinalesDayTrip,
          offer: packages[4],
        },
      },
      {
        path: 'history-culture-and-nature',
        loadComponent: () =>
          import('./components/base-pages/experience-view-base-page/experience-view-base-page')
            .then(m => m.ExperienceViewBasePage),
        data: {
          header: headerExperience,
          gallery: galleryHistoryCultureNature,
          offer: packages[5],
        },
      },
    ]
  },
  {
    path: 'nature',
    component: DiscoverPackageDefaultAll,
  },
  {
    path: 'packages',       // ← esta es la URL que se usará (ej: /packages)
    component: PackagesPage, // ← el componente que se mostrará
  },
  {
    path: 'packages/adventure-nature',
    component: PackageBasePage,
    data: {
      header: headerAdventureNature,
      packageDetails: aventuraNatural,
      allPackages: packages
    }
  },
  {
    path: 'packages/relax-and-beach',
    component: PackageBasePage,
    data: {
      header: headerRelaxAndBeach,
      packageDetails: relaxYPlaya,
      allPackages: packages
    }
  },
  {
    path: 'packages/vinales-family',
    component: PackageBasePage,
    data: {
      header: headerVinalesFamily,
      packageDetails: vinalesEnFamilia,
      allPackages: packages
    }
  },
  {
    path: 'packages/romance-in-vinales',
    component: PackageBasePage,
    data: {
      header: headerRomanceInVinales,
      packageDetails: romanceEnVinales,
      allPackages: packages
    }
  },
  {
    path: 'packages/nature-and-tradition',
    component: PackageBasePage,
    data: {
      header: headerNatureAndTradition,
      packageDetails: naturalezaYTradicion,
      allPackages: packages
    }
  },
  {
    path: 'packages/vinales-360',
    component: PackageBasePage,
    data: {
      header: headerVinales360,
      packageDetails: vinales360,
      allPackages: packages
    }
  },
  {
    path: 'packages/vinales-express',
    component: PackageBasePage,
    data: {
      header: headerVinalesExpress,
      packageDetails: vinalesExpress,
      allPackages: packages
    }
  },
  {
    path: 'reviews',
    component: ReviewsNewPage
  },

  {
    path: 'form',
    component: ReservationSection
  },
  // { path: '**', redirectTo: '/home' }
];
