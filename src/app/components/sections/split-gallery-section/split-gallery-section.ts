import { Component, HostBinding, input, OnInit } from '@angular/core';
import { InfoPanel } from "../../shared/info-panel/info-panel";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HexColor } from '../../shared/interfaces/app-interfaces';


@Component({
  selector: 'split-gallery-section',
  imports: [InfoPanel,RouterLink,TranslatePipe],
  templateUrl: './split-gallery-section.html',
  styleUrl: './split-gallery-section.css' // 👈 corregido (plural)
})
export class SplitGallerySection implements OnInit {
  // Inputs reactivos modernos de Angular 19+
  leftImage = input.required<{ src: string; alt: string }>();
  info = input.required<{
    title: string;
    description: string;
    link?: { text: string; url: string };
  }>();
  rightImages = input.required<{
    src: string;
    alt: string;
    name?: string;
    details?: string;
    path?: string;
  }[]>();

  color = input<HexColor>('#E4EAE5');
  hasHostBg = input<boolean>(true);
  reverse = input<boolean>(false);


  @HostBinding('style.backgroundColor')
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
}







