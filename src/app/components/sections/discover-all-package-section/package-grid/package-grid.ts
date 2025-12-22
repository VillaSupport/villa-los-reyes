import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PackageItem } from '../../discover-package-section/packages-list/package-item/package-item';

// Definimos la interfaz aquí o impórtala de tu modelo
interface PackageData {
  background: string;
  title: string;
  duration: string;
  description: string;
  price: string;
  perUnit: string;
  path: string;
}

@Component({
  selector: 'package-grid',
  standalone: true,
  imports: [PackageItem, RouterLink],
  templateUrl: './package-grid.html',
  styleUrl: './package-grid.css',
})
export class PackageGrid {
  packages = input.required<PackageData[]>();
}
