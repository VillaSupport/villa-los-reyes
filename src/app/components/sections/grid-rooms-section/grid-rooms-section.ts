import { Component, input } from '@angular/core';
import { InfoPanel } from "../../shared/info-panel/info-panel";
import { TranslatePipe } from '@ngx-translate/core';
import { RoomData } from '../../../features/services-facilities/interfaces/services-facilities.interface';
import { RoomItem } from '../discover-room-section/rooms-gallery/room-item/room-item';

@Component({
  selector: 'grid-rooms-section',
  imports: [RoomItem,TranslatePipe],
  templateUrl: './grid-rooms-section.html',
  styleUrl: './grid-rooms-section.css'
})
export class GridRoomsSection {
  info = input.required<{
    title: string;
    description: string;
    link?: { text: string; url: string };
  }>();

  
  rooms = input<RoomData[]>([]);
}
