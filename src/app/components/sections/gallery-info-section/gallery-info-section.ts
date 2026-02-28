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

}

