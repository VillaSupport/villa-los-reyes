import { Routes } from "@angular/router";
import { PackageItineraryPage } from "./pages/package-itinerary-page/package-itinerary-page";
import { PackagesPage } from "./pages/packages-page/packages-page";
import { SectionNavService } from "../../shared/services/section-nav.service";

export const PACKAGE_ROUTES: Routes = [
{
    path: '',
    providers: [SectionNavService], // Ahora este provider cubre a ambos
    children: [
      {
        path: '',
        component: PackagesPage,
      },
      {
        path: ':slug',
        component: PackageItineraryPage,
      },
    ]
  }
];