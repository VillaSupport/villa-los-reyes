import { Component, computed, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryDetail, AdventurePreview as CategoryItemPreview } from '../../interfaces/feature-overview.interface';
import { InfoBlock } from "../info-block/info-block";
import { InfoData } from '../../interfaces/common.interface';


@Component({
  selector: 'category-preview',
  imports: [RouterLink, CommonModule, InfoBlock],

  templateUrl: './category-preview.html',
  styleUrl: './category-preview.css',
  host: {
    '[class.is-overlapping]': 'overlap()', // Sincroniza la clase con la Signal
  }
})

export class CategoryPreview {

  category = input<CategoryDetail>();
  items = input<CategoryItemPreview[]>([]); // Es buena práctica dar un valor inicial []
  route = input.required<ActivatedRoute>();

  limitedItems = computed(() => {
    const originalItems = this.items() || [];
    const sliced = originalItems.slice(0, 3); // Cogemos los que se puedan (0, 1, 2 o 3)

    // Rellenamos con null hasta que el tamaño sea 3
    while (sliced.length < 3) {
      (sliced as any[]).push(null);
    }

    return sliced;
  });


  infoData = computed<InfoData>(() => {
    const cat = this.category();

    return {
      title: cat?.title ?? '',
      desc: cat?.desc ?? '',
      slug: cat?.slug,
      linkText: cat?.linkText,
    };
  });

  mainImageLoaded = signal(false);
  loadedPreviewIndices = signal<Set<number>>(new Set());

  reverse = input<boolean>(false);
  whiteBg = input<boolean>(false);
  overlap = input<boolean>(false);

  onMainImageLoad() {
    this.mainImageLoaded.set(true);
  }

  onPreviewImageLoad(index: number) {
    this.loadedPreviewIndices.update(prev => new Set(prev).add(index));
  }

 getRouteInfo(catSlug: string, itemSlug: string) {
  const [pathPart, fragment] = itemSlug.split('#');
  const pathSegments = [catSlug, ...pathPart.split('/').filter(s => s !== '')];

  return {
    commands: pathSegments,
    // Cambiamos 'null' por 'undefined' para que coincida con el tipo de RouterLink
    fragment: fragment || undefined 
  };
}
}





