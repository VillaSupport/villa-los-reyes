import { Component, input } from '@angular/core';
import { RoomCard } from '../room-card/room-card';
import { RoomData } from '../../interfaces/services-facilities.interface';

@Component({
  selector: 'rooms-gallery',
  imports: [RoomCard],
  templateUrl: './rooms-gallery.html',
  styleUrl: './rooms-gallery.css'
})
export class RoomsGallery {
  rooms = input<RoomData[]>([]);
}
