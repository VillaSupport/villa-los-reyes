import { Component, HostBinding, input } from '@angular/core';
import { GalleryGrid } from "../../shared/gallery-grid/gallery-grid";
import { InfoPanel } from '../../shared/info-panel/info-panel';
import { FeatureList } from "../../shared/about/feature-list/feature-list";
import { UnitString } from '../../shared/interfaces/app-interfaces';
type HexColor = `#${string}`;

@Component({
  selector: 'gallery-info-section',
  templateUrl: './gallery-info-section.html',
  styleUrls: ['./gallery-info-section.css'],
  imports: [InfoPanel, GalleryGrid, FeatureList],
})
export class GalleryInfoSection {

  mainImage = input.required<{ src: string; alt: string }>();
  thumbImages = input<{ src: string; alt: string }[]>();

  title = input.required<string>();
  description = input.required<string>();
  link = input<{ text: string; url: string }>();
  features = input<string[]>();
  featuresTitle = input<string>();
  reverse = input<boolean>(false);

  color = input<HexColor>('#E4EAE5');
  hasHostBg = input<boolean>(true);

   @HostBinding('style.background')
  hostBg: string = '';

  ngOnInit(): void {
    const color = this.color();
    const hasBg = this.hasHostBg();
    this.hostBg = this.getHostColor(color, hasBg);

  }

  private getHostColor(color: string, active: boolean): string {
    if (!active) return '';
    if (color === '#E4EAE5') return '#f7faf7';
    if (color === '#f7faf7') return '#E4EAE5';
    return '#ffffff';
  }

  mainHeight = input<UnitString>('45vh');
  thumbHeight = input<UnitString>('24vh');
}

