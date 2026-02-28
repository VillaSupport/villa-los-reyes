import { Component, input, signal, computed } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'carousel-section',
  imports: [TranslatePipe],
  templateUrl: './carousel-section.html',
  styleUrls: ['./carousel-section.css'],
})
export class CarouselSection {
  slides = input.required<{ src: string; altKey: string; titleKey: string; subtitleKey: string }[]>();

  current = signal(0);

  // Signal reactivo para detectar mobile
  isMobile = signal(window.innerWidth < 600);

  constructor() {
    // Escucha cambios de tamaño y actualiza la señal
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 600);
    });
  }

  next() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update(v => (v + 1) % total);
    }
  }

  prev() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update(v => (v - 1 + total) % total);
    }
  }

  goToSlide(index: number) {
    const total = this.slides()?.length ?? 0;
    if (index >= 0 && index < total) {
      this.current.set(index);
    }
  }

  // Tamaños dinámicos de los indicadores
  getIndicatorSize(i: number): number {
    return this.isMobile()
      ? 8 + i * 1.2     // versión móvil (pequeño + proporcionado)
      : 12 + i * 2;     // versión desktop (tu fórmula original)
  }
}


