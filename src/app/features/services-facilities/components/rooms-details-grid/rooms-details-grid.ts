import { Component, inject, input } from '@angular/core';
import { InfoData } from '../../../../shared/interfaces/common.interface';
import { RoomData } from '../../interfaces/services-facilities.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { RoomCard } from "../room-card/room-card";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rooms-details-grid',
  imports: [TranslatePipe, RoomCard],
  templateUrl: './rooms-details-grid.html',
  styleUrl: './rooms-details-grid.css',
})
export class RoomsDetailsGrid {
  info = input.required<InfoData>()
  rooms = input<RoomData[]>([]);

}
