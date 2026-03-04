import { Component, input } from '@angular/core';
import { ServicesGallery } from "./services-gallery/services-gallery";
import { DiscoveryHeader } from "../../../shared/components/discovery-header/discovery-header";
import { HeaderData } from '../../../shared/interfaces/common.interface';

@Component({
  selector: 'discover-services-section',
  templateUrl: './discover-services-section.html',
  styleUrls: ['./discover-services-section.css'],
  imports: [ServicesGallery, DiscoveryHeader]
})
export class DiscoverServicesSection {
  header = input.required<HeaderData>();
  services = input.required<Array<{ title: string; src: string; alt: string ;path:string;fragment:string}>>();

}
