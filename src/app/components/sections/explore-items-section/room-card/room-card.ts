import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.html',
  styleUrl: './room-card.css',
  imports:[TranslatePipe,RouterLink]
})

export class RoomCard {

  room = input.required<{
    src: string;
    alt: string;
    name: string;
    details: string;
    path: string;
  }>();

}