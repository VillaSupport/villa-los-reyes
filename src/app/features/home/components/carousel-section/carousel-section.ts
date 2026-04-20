import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  input,
  signal,
  computed,
  PLATFORM_ID,
  inject,
  HostListener,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'carousel-section',
  imports: [TranslatePipe],
  templateUrl: './carousel-section.html',
  styleUrls: ['./carousel-section.css'],
})
export class CarouselSection {
  private platformId = inject(PLATFORM_ID);

  slides =
    input.required<
      { src: string; altKey: string; titleKey: string; subtitleKey: string }[]
    >();

  current = signal(0);

  private touchStartX = 0;
  private touchEndX = 0;
  private readonly minSwipeDistance = 50; // Píxeles mínimos para mover

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.touchStartX = event.changedTouches[0].screenX;
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.touchEndX = event.changedTouches[0].screenX;
      this.handleSwipe();
    }
  }

  private handleSwipe() {
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (Math.abs(swipeDistance) > this.minSwipeDistance) {
      if (swipeDistance > 0) {
        this.next(); // Deslizó a la izquierda
      } else {
        this.prev(); // Deslizó a la derecha
      }
    }
  }

  next() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update((v) => (v + 1) % total);
    }
  }

  prev() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update((v) => (v - 1 + total) % total);
    }
  }

  goToSlide(index: number) {
    const total = this.slides()?.length ?? 0;
    if (index >= 0 && index < total) {
      this.current.set(index);
    }
  }

  getIndicatorSize(i: number): number {
    const currentIndex = this.current();
    const distance = Math.abs(currentIndex - i);

    const maxSize = 25; 
    const step = 5; 
    const minSize = 5;

    return Math.max(maxSize - (distance * step), minSize);
  }
}
