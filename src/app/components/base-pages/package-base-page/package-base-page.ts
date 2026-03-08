import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { HeaderDataDeprecated } from '../room-base-page/room-base-page';
import { TranslatePipe } from '@ngx-translate/core';
import { PackageItem } from "../../sections/discover-package-section/packages-list/package-item/package-item";
import { ExploreItemsSection } from "../../sections/explore-items-section/explore-items-section";
import { HeaderData } from '../../../shared/interfaces/common.interface';

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
  imports: [TranslatePipe, PackageItem, ExploreItemsSection, PageHeader],
  templateUrl: './package-base-page.html',
  styleUrl: './package-base-page.css'
})
export class PackageBasePage {
  // 🔸 Cada bloque puede venir vía input o desde route.data
  _header = input<HeaderDataDeprecated>();
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

  get head(): HeaderDataDeprecated {
    return this._header() ?? this.route.snapshot.data['header'];
  }

  header: HeaderData = {
    title: this.head.head.title,
    description: this.head.head.description,
    img: this.head.image,
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
