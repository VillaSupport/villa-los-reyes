import { Component, input } from '@angular/core';
import { RoomItem } from "../discover-room-section/rooms-gallery/room-item/room-item";
import { InfoPanel } from "../../shared/info-panel/info-panel";

@Component({
  selector: 'grid-rooms-section',
  imports: [RoomItem, InfoPanel],
  templateUrl: './grid-rooms-section.html',
  styleUrl: './grid-rooms-section.css'
})
export class GridRoomsSection {
  info = input.required<{
    title: string;
    description: string;
    link?: { text: string; url: string };
  }>();

  rooms = input<
    { src: string; alt: string; name: string; details: string; path?: string }[]
  >([]);
}
