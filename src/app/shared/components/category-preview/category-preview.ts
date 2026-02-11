import { Component, computed, input } from '@angular/core';
import { HexColor } from '../../../components/shared/interfaces/app-interfaces';
import { InfoPanel } from "../../../components/shared/info-panel/info-panel";
import { RouterLink } from '@angular/router';
import { AutoImgDirective } from '../../../auto-img.directive';
import { CommonModule } from '@angular/common';
import { MainContent, PreviewContent } from '../../../features/experiences/interfaces/experience.interfaces';


@Component({
  selector: 'category-preview',
  imports: [InfoPanel, RouterLink, CommonModule, AutoImgDirective],

  templateUrl: './category-preview.html',
  styleUrl: './category-preview.css',
})


export class CategoryPreview {

  mainItem = input.required<MainContent>();
  previewItems = input.required<PreviewContent[]>();

  color = input<HexColor>('#E4EAE5');
  reverse = input<boolean>(false);
  hasHostBg = input<boolean>(true);

  // Lógica reactiva para el fondo
  computedHostBg = computed(() => {
    if (!this.hasHostBg()) return 'transparent';
    return this.color() === '#E4EAE5' ? '#f7faf7' : '#E4EAE5';
  });
}





