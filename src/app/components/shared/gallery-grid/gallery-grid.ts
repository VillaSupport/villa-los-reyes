import { Component, HostListener, input, signal, OnInit, effect } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UnitString } from '../interfaces/app-interfaces';
import { AutoImgDirective } from '../../../auto-img.directive';


export interface ResponsiveConfig {
  /** Ancho máximo al que se aplica este tamaño */
  maxWidth: number;
  mainHeight: UnitString;
  thumbHeight: UnitString;
}

@Component({
  selector: 'gallery-grid',
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.css',
  imports: [TranslatePipe,AutoImgDirective],
})
export class GalleryGrid {
  // === Inputs obligatorios ===
  mainImage = input.required<{ src: string; alt: string }>();
  thumbImages = input<{ src: string; alt: string }[]>();

}

