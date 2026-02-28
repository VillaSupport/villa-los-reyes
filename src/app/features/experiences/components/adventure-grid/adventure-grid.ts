import { Component, inject, computed, effect, Signal, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { ExperiencesService } from '../../services/experience.service';
import { CategoryDetail } from '../../interfaces/experience.interfaces';

@Component({
  selector: 'adventure-grid',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './adventure-grid.html',
  styleUrl: './adventure-grid.css',
})
export class AdventureGrid {

  category = input<CategoryDetail>();
  // sizeTest = input<number>(4)

  public title = computed(() => this.category()?.title);
  // public adventures = computed(()=> this.category()?.adventures);
  loadedImages = signal<Set<number>>(new Set());
  
  onImageLoad(index: number) {
    this.loadedImages.update(prev => new Set(prev).add(index));
  }

  public adventures = computed(() => {
    const items = this.category()?.adventures || []

    const itemsCount: number = items?.length || 0;
    // const size = this.sizeTest();
    if (itemsCount < 4) {
      return [...items, ...Array(4 - itemsCount).fill(null)]
    }
    return items
  })
  
}


