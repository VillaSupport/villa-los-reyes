import { rooms } from '../../../config/room-data';
import { Component, inject, input } from '@angular/core';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { GalleryInfoSection } from "../../sections/gallery-info-section/gallery-info-section";
import { RoomOfferSection } from "../../sections/room-offer-section/room-offer-section";
import { ActivatedRoute } from '@angular/router';
import { OfferData } from '../room-base-page/room-base-page';
import { HexColor, UnitString, Position } from '../../shared/interfaces/app-interfaces';
import { rooms as roomsData} from '../../../config/room-data';
import { ExploreItemsSection } from '../../sections/explore-items-section/explore-items-section';
import { RoomCard } from "../../sections/explore-items-section/room-card/room-card";
import { PackageItem } from "../../sections/discover-package-section/packages-list/package-item/package-item";
import { packages } from '../../../config/packages-data';
import { RoomNavigatorComponent } from "../../shared/room-navigator/room-navigator";
import { GroupNavigatorService } from '../../../services/group-navigator-service';



export interface HeaderDataDeprecatedT {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  objectPosition: Position;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  mainImage: GalleryImage;
  thumbImages?: GalleryImage[];
  title: string;
  description: string;
  link?: { text: string; url: string };
  features?: string[];
  featuresTitle?: string;
  panelWidth?: string;
  reverse?: boolean;
  color: HexColor;
  hasHostBg: boolean;
}

@Component({
  selector: 'experience-view-base-page',
  imports: [GalleryInfoSection, RoomOfferSection, ExploreItemsSection, RoomCard, RoomNavigatorComponent, PageHeader],
  templateUrl: './experience-view-base-page.html',
  styleUrl: './experience-view-base-page.css'

})
export class ExperienceViewBasePage {
navigator = inject(GroupNavigatorService);
  // 🔸 Cada bloque puede venir por input o por route.data
  _header = input<HeaderDataDeprecatedT>();
  _gallery = input<GalleryData>();
  _offer = input<OfferData>();
  rooms = roomsData;

  packages = packages
  constructor(private route: ActivatedRoute) {}

  get header(): HeaderDataDeprecatedT {
    return this._header() ?? this.route.snapshot.data['header'];
  }

  get gallery(): GalleryData {
    let gallery = this._gallery() ?? this.route.snapshot.data['gallery'];
    return gallery
  }

  get offer(): OfferData {
    return this._offer() ?? this.route.snapshot.data['offer'];
  }

    goNext() {
  this.navigator.next();
}

  goPrev() {
    this.navigator.prev();
  }
}
