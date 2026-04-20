import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PackageCardData } from '../../interfaces/packages.interface';



@Component({
  selector: 'package-card',
  imports: [RouterLink],
  templateUrl: './package-card.html',
  styleUrl: './package-card.css',
})
export class PackageCard {

  data = input.required<PackageCardData|undefined>();

}
