import { Component, computed, input, signal } from '@angular/core';
import { ImgData } from '../../interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'gallery-thumbs-grid',
  imports: [],
  templateUrl: './gallery-thumbs-grid.html',
  styleUrl: './gallery-thumbs-grid.css',
})
export class GalleryThumbsGrid {
  mainImage = input.required<ImgData|undefined>();
  thumbImages = input<ImgData[]>();

  showThumbs = input<boolean>(false);

  selectedImage = signal<ImgData | null>(null);

  isActive = computed(() => {
    return this.showThumbs() || this.thumbImages() !== undefined;
  });

  mainImageLoaded = signal(false);
  loadedThumbsCount = signal(0);

  allThumbsLoaded = computed(() => {
    const total = this.thumbImages()?.length || 0;
    return total > 0 && this.loadedThumbsCount() >= total;
  });
  
  onMainImageLoad() {
    this.mainImageLoaded.set(true);
  }

  onThumbsImageLoad() {
    this.loadedThumbsCount.update(count => count + 1);
  }

  // --- NUEVOS MÉTODOS ---
  openImage(img: ImgData | undefined) {
    if (img) this.selectedImage.set(img);
  }

  closeImage() {
    this.selectedImage.set(null);
  }
}
