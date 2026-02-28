import { Component } from '@angular/core';
import { SplitGallerySection } from "../../components/sections/split-gallery-section/split-gallery-section";
import { rooms as roomData} from '../../config/room-data';
import { servicesContent } from '../../config/services-data';
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'app-services',
  imports: [SplitGallerySection, PageHeader],
  templateUrl: './services-facilities-page.html',
  styleUrl: './services-facilities-page.css'
})
export class ServicesFacilitiesPage {

  rooms = roomData;
  servicesContent = servicesContent;
}
