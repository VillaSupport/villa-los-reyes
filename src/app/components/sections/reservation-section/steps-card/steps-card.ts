import { Component, input } from '@angular/core';

@Component({
  selector: 'steps-card',
  imports: [],
  templateUrl: './steps-card.html',
  styleUrl: './steps-card.css',
})
export class StepsCard {
  step = input.required<number>()
}
