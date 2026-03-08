import { Component, input } from '@angular/core';
import { BenefitCardData } from '../../interfaces/services-facilities.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  data = input.required<BenefitCardData>();

}
