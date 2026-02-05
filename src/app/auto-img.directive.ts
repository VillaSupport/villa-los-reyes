import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'img', // Esto hace que busque todas las etiquetas <img> automáticamente
  standalone: true // Permite usarla fácilmente en componentes modernos
})
export class AutoImgDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const img = this.el.nativeElement as HTMLImageElement;

    // Si la imagen ya cargó (por caché), quitamos el skeleton rápido
    if (img.complete) {
      this.setLoaded();
    } else {
      // Si no, esperamos a que el navegador nos avise
      this.renderer.listen(img, 'load', () => this.setLoaded());
      this.renderer.listen(img, 'error', () => this.setLoaded());
    }
  }

  private setLoaded() {
    // Le añadimos la clase 'loaded' a la imagen
    this.renderer.addClass(this.el.nativeElement, 'loaded');
  }
}