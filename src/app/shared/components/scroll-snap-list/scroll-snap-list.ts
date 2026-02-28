import { NgTemplateOutlet, isPlatformBrowser } from '@angular/common';
import { Component, contentChild, input, TemplateRef, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'scroll-snap-list',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './scroll-snap-list.html',
  styleUrl: './scroll-snap-list.css',
})
export class ScrollSnapList {
  data = input.required<any[]>();
  cardTemplate = contentChild.required(TemplateRef);
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;
  private moved = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  startDragging(e: MouseEvent) {
    if (!this.isBrowser) return;
    
    // Solo activamos si es el click izquierdo
    if (e.button !== 0) return;

    this.isDown = true;
    this.moved = false;
    const el = this.scrollContainer.nativeElement;
    
    el.style.scrollSnapType = 'none'; // Desactivamos el "salto" para que sea fluido
    el.style.cursor = 'grabbing';
    
    this.startX = e.pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }

  stopDragging() {
    if (!this.isBrowser) return;
    this.isDown = false;
    const el = this.scrollContainer.nativeElement;
    el.style.scrollSnapType = 'x mandatory'; // Volvemos a activar el snap
    el.style.cursor = 'grab';
  }

  moveEvent(e: MouseEvent) {
    if (!this.isDown || !this.isBrowser) return;
    
    const el = this.scrollContainer.nativeElement;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - this.startX) * 2; // Ajusta la sensibilidad aquí
    
    // Si se mueve más de 5px, consideramos que es arrastre y no click
    if (Math.abs(walk) > 5) {
      this.moved = true;
      el.scrollLeft = this.scrollLeft - walk;
    }
  }

  handleGlobalClick(e: MouseEvent) {
    if (this.moved) {
      // Bloqueamos el click del enlace si el usuario estaba arrastrando
      e.preventDefault();
      e.stopPropagation();
      this.moved = false;
    }
  }

  // Evita que el navegador intente arrastrar imágenes dentro del template
  preventNativeDrag(e: DragEvent) {
    e.preventDefault();
  }
}
