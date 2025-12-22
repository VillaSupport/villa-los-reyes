import { Component, inject, input, signal } from '@angular/core';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { GalleryInfoSection } from "../../sections/gallery-info-section/gallery-info-section";
import { DiscoverExperienceSection } from "../../sections/discover-experiences-section/discover-experience-section";
import { RoomOfferSection } from '../../sections/room-offer-section/room-offer-section';
import { Position, Transform, TransformOrigin } from '../../shared/interfaces/app-interfaces';
import { ActivatedRoute } from '@angular/router';
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";
import { GroupNavigatorService } from '../../../services/group-navigator-service';



// --- Tipos de datos compartidos ---
export interface HeaderData {
  head: { title: string; description: string };
  image: { src: string; alt: string };
  objectPosition: Position;
}

export interface GalleryData {
  mainImage: { src: string; alt: string };
  thumbImages: { src: string; alt: string }[];
  title: string;
  description: string;
  link?: { text: string; url: string };
  features?: string[];
  featuresTitle?: string;
  panelWidth?: string;
  reverse?: boolean;
  color?: string;
  hasHostBg?: boolean;
}

export interface OfferData {
  background: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  price: string;
  currency: string;
  perUnit: string;
  textLink?: string;
  path?: string ;
  objectPosition: Position;
  transform:Transform,
  transformOrigin:TransformOrigin,
}

export interface RoomPageRouteData {
  header: HeaderData;
  gallery: GalleryData;
  offer: OfferData;
}

@Component({
  selector: 'app-room-base-page',
  imports: [MainHeaderSection, GalleryInfoSection, DiscoverExperienceSection, RoomOfferSection, DiscoverServicesDefault],
  templateUrl: './room-base-page.html',
  styleUrl: './room-base-page.css'
})
export class RoomBasePage {

   navigator = inject(GroupNavigatorService);

  _header = input<HeaderData>();
  _gallery = input<GalleryData>();
  _offer = input<OfferData>();

  constructor(private route: ActivatedRoute) {}

  // TODO: Lo que sale del  data['______'] no necesariamente es del tipo que esta delante , quizas hay formas de validar esto en tiempo de compilacion
  get header(): HeaderData {
    return this._header() ?? this.route.snapshot.data['header'];
  }
  get gallery(): GalleryData {
    return this._gallery() ?? this.route.snapshot.data['gallery'];
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


