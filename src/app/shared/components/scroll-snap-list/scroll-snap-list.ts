import { NgTemplateOutlet, isPlatformBrowser } from '@angular/common';
import {
  Component,
  contentChild,
  input,
  TemplateRef,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'scroll-snap-list',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './scroll-snap-list.html',
  styleUrl: './scroll-snap-list.css',
})
export class ScrollSnapList {
  data = input.required<any[]>();
  mobileRow = input<boolean>(false);
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

  private initDrag(pageX: number) {
    if (!this.isBrowser) return;
    this.isDown = true;
    this.moved = false;
    const el = this.scrollContainer.nativeElement;
    el.style.scrollSnapType = 'none';
    el.style.cursor = 'grabbing';
    this.startX = pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }

  startDragging(e: MouseEvent) {
    this.initDrag(e.pageX);
  }

  // Soporte para Touch (Móvil)
  startDraggingTouch(e: TouchEvent) {
    this.initDrag(e.touches[0].pageX);
  }

  stopDragging() {
    if (!this.isBrowser || !this.isDown) return;
    this.isDown = false;
    const el = this.scrollContainer.nativeElement;
    el.style.scrollSnapType = 'x mandatory';
    el.style.cursor = 'grab';
  }

  moveEvent(e: MouseEvent | TouchEvent) {
    if (!this.isDown || !this.isBrowser) return;

    const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
    const el = this.scrollContainer.nativeElement;
    const x = pageX - el.offsetLeft;
    const walk = (x - this.startX) * 2;

    if (Math.abs(walk) > 5) {
      this.moved = true;
      el.scrollLeft = this.scrollLeft - walk;
    }
  }

  handleGlobalClick(e: MouseEvent) {
    if (this.moved) {
      e.preventDefault();
      e.stopPropagation();
      this.moved = false;
    }
  }
  preventNativeDrag(e: DragEvent) {
    e.preventDefault();
  }
}
