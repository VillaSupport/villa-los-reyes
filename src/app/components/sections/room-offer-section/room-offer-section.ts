import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Position, Transform, TransformOrigin } from '../../shared/interfaces/app-interfaces';

@Component({
  selector: 'room-offer-section',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './room-offer-section.html',
  styleUrl: './room-offer-section.css',
})
export class RoomOfferSection {
  background = input.required<string>();

  title = input.required<string>();
  subtitle = input.required<string>();
  duration = input.required<string>();
  description = input.required<string>();

  price = input.required<string>();
  currency = input.required<string>();
  perUnit = input.required<string>();

  objectPosition = input<Position>('center center');
  transform = input<Transform>('scale(1)');
  transformOrigin = input<TransformOrigin>('center center');

  link = input<{ text: string; url: string }>();

}
