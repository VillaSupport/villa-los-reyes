import { Component } from '@angular/core';
import { GridRoomsSection } from "../../components/sections/grid-rooms-section/grid-rooms-section";
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { rooms } from '../../config/room-data';
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'facilities-page',
  imports: [GridRoomsSection, GalleryInfoSection, PageHeader],
  templateUrl: './facilities-page.html',
  styleUrl: './facilities-page.css'
})
export class FacilitiesPage {
  rooms = rooms
}
