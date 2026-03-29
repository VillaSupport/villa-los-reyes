import { Component, input } from '@angular/core';
import { ImgData, InfoData } from '../../interfaces/common.interface';
import {InfoBlock } from '../info-block/info-block';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'split-view',
  imports: [InfoBlock],
  templateUrl: './split-view.html',
  styleUrl: './split-view.css',
  host: {
    '[class.is-overlapping]': 'overlap()', // Sincroniza la clase con la Signal
  }
})
export class SplitView {
  info = input.required<InfoData>();
  images = input<ImgData[]>();
  map = input<{ url: string }>();

  safeMapUrl?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

   ngOnInit() {

    const currentMap = this.map();
    if (currentMap) {
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(currentMap.url);
    }

    // Seguridad adicional: si no hay ni imagen ni mapa, se advierte
    if (!this.images() && !this.map()) {
      console.warn(
        '⚠️ SplitView: se debe proveer al menos una imagen o un mapa.'
      );
    }
  }
  reverse = input<boolean>(false);
  whiteBg = input<boolean>(false);
  overlap = input<boolean>(false);
}

