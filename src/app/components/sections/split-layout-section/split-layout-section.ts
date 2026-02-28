import { Component, HostBinding, input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InfoPanel } from "../../shared/info-panel/info-panel";
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureList } from "../../shared/about/feature-list/feature-list";

type HexColor = `#${string}`;
type Image = { src: string; alt: string };


@Component({
  selector: 'split-layout-section',
  templateUrl: './split-layout-section.html',
  styleUrls: ['./split-layout-section.css'],
  imports: [InfoPanel, TranslatePipe, FeatureList],
})
export class SplitLayoutSection implements OnInit {
  info = input.required<{ title: string; description: string }>();
  images = input<[Image] | [Image, Image] | null>(null);

  map = input<{ url: string } | null>(null);
  reverse = input<boolean>(false);
  color = input<HexColor>('#E4EAE5');
  features = input<string[]>();
  featuresTitle = input<string>();

  @HostBinding('style.backgroundColor') hostBg!: string;

  safeMapUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

    const currentColor = this.color();
    this.hostBg = this.getHostColor(currentColor);


    const currentMap = this.map();
    if (currentMap) {
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(currentMap.url);
    }

    // Seguridad adicional: si no hay ni imagen ni mapa, se advierte
    if (!this.images() && !this.map()) {
      console.warn(
        '⚠️ SplitLayoutSection: se debe proveer al menos una imagen o un mapa.'
      );
    }
  }

  private getHostColor(color: string): string {
    if (color === '#E4EAE5') return '#f7faf7';
    if (color === '#f7faf7') return '#E4EAE5';
    return '#ffffff';
  }
}



