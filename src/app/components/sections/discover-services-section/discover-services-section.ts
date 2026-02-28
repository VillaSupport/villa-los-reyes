import { Component, input } from '@angular/core';
import { SectionHeader } from "../../shared/section-header/section-header";
import { ServicesGallery } from "./services-gallery/services-gallery";
import { DiscoveryHeader } from "../../../shared/components/discovery-header/discovery-header";

@Component({
  selector: 'discover-services-section',
  templateUrl: './discover-services-section.html',
  styleUrls: ['./discover-services-section.css'],
  imports: [SectionHeader, ServicesGallery, DiscoveryHeader]
})
export class DiscoverServicesSection {
  header = input.required<{ title: string; description: string; link: { text: string; url: string } }>();
  services = input.required<Array<{ title: string; src: string; alt: string ;path:string;fragment:string}>>();

}
