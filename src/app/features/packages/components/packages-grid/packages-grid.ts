import { Component, input } from '@angular/core';
import { PackageCardData } from '../../interfaces/packages.interface';
import { PackageCard } from '../package-card/package-card';

@Component({
  selector: 'packages-grid',
  standalone: true,
  imports: [PackageCard],
  templateUrl: './packages-grid.html',
  styleUrl: './packages-grid.css',
})
export class PackageGrid {
  packages = input.required<PackageCardData[]>();
}
