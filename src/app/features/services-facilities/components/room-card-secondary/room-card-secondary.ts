import { Component, input } from '@angular/core';
import { ImgData } from '../../../../shared/interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { RoomData } from '../../interfaces/services-facilities.interface';

@Component({
  selector: 'room-card-secondary',
  imports: [TranslatePipe,RouterLink],
  templateUrl: './room-card-secondary.html',
  styleUrl: './room-card-secondary.css',
})
export class RoomCardSecondary {

  room = input.required<RoomData>();
}
