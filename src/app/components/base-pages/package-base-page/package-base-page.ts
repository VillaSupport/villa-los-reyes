import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { HeaderData } from '../room-base-page/room-base-page';
import { TranslatePipe } from '@ngx-translate/core';
import { PackageItem } from "../../sections/discover-package-section/packages-list/package-item/package-item";
import { ExploreItemsSection } from "../../sections/explore-items-section/explore-items-section";

export interface PackageDetails {
  title: string;
  description: string;
  itinerary: string[];
  includes: {
    lodging: string;
    duration: string;
    activities: string[];
    gastronomy: string[];
    transportation: string;

  };
  pricing: {
    unit: string;
  };
}


@Component({
  selector: 'app-package-view-base-page',
  imports: [MainHeaderSection, TranslatePipe, PackageItem, ExploreItemsSection],
  templateUrl: './package-base-page.html',
  styleUrl: './package-base-page.css'
})
export class PackageBasePage {
  // 🔸 Cada bloque puede venir vía input o desde route.data
  _header = input<HeaderData>();
  _packageDetails = input<PackageDetails>();

  _allPackages = input<{
    background: string;
    title: string;
    duration: string;
    description: string;
    price: string;
    perUnit: string;
    path: string;
  }[]>();

  constructor(private route: ActivatedRoute) { }

  get header(): HeaderData {
    return this._header() ?? this.route.snapshot.data['header'];
  }

  get packageDetails(): PackageDetails {
    return this._packageDetails() ?? this.route.snapshot.data['packageDetails'];
  }

  get allPackages(): {
    background: string;
    title: string;
    duration: string;
    description: string;
    price: string;
    perUnit: string;
    path: string;
  }[] {
    return this._allPackages() ?? this.route.snapshot.data['allPackages'];
  }

}
