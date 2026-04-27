import {
  Component,
  computed,
  effect,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { ImgData } from '../../interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'gallery-thumbs-grid',
  imports: [],
  templateUrl: './gallery-thumbs-grid.html',
  styleUrl: './gallery-thumbs-grid.css',
})
export class GalleryThumbsGrid {
  mainImage = input.required<ImgData | undefined>();
  thumbImages = input<ImgData[]>();
  showThumbs = input<boolean>(false);
  selectedImage = signal<ImgData | null>(null);

  private platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
  if (isPlatformBrowser(this.platformId)) {
    const isOpen = !!this.selectedImage();
    const body = document.body;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      body.style.overflow = 'hidden';
      // Evita que la web "salte" al desaparecer la barra de scroll
      body.style.paddingRight = `${scrollBarWidth}px`;
      body.classList.add('lightbox-open');
      
      // Opcional: Bloqueo extra para móviles (iOS es rebelde con el overflow: hidden)
      body.addEventListener('touchmove', this.preventScroll, { passive: false });
    } else {
      body.style.overflow = '';
      body.style.paddingRight = '';
      body.classList.remove('lightbox-open');
      
      body.removeEventListener('touchmove', this.preventScroll);
    }
  }
});
  }

  

  // Método auxiliar para bloquear el swipe
  private preventScroll(e: TouchEvent) {
    e.preventDefault();
  }

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
    this.loadedThumbsCount.update((count) => count + 1);
  }

  // --- NUEVOS MÉTODOS ---
  openImage(img: ImgData | undefined) {
    if (img) this.selectedImage.set(img);
  }

  closeImage() {
    this.selectedImage.set(null);
  }
}
