import { Component } from '@angular/core';
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";
import { GridRoomsSection } from "../../components/sections/grid-rooms-section/grid-rooms-section";
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { rooms } from '../../config/room-data';

@Component({
  selector: 'facilities-page',
  imports: [MainHeaderSection, GridRoomsSection, GalleryInfoSection],
  templateUrl: './facilities-page.html',
  styleUrl: './facilities-page.css'
})
export class FacilitiesPage {
  rooms = rooms
}
