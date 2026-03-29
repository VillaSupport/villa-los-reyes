import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ImgData } from '../../../../shared/interfaces/common.interface';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.html',
  styleUrl: './room-card.css',
  imports:[TranslatePipe,RouterLink]
})

export class RoomCard {

  room = input.required<{
    image:ImgData;
    title: string;
    details: string;
    path?: string;
  }>();

}