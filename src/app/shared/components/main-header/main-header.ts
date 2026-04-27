import {
  Component,
  HostBinding,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { PromoBanner } from './promo-banner/promo-banner';
import { Navbar } from './navbar/navbar';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [Navbar, PromoBanner],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  hidden = signal(false);

  @HostBinding('class.hidden') get isHidden() {
    return this.hidden();
  }

  private lastScroll = 0;
  private bodyObserver?: MutationObserver;
  
  ngOnInit() {
    if (this.isBrowser) {
      this.bodyObserver = new MutationObserver(() => {
        if (document.body.classList.contains('lightbox-open')) {
          if (!this.hidden()) this.hidden.set(true);
        } else {
          this.checkHeaderStateAfterLightbox();
        }
      });

      // Iniciamos la observación del body buscando cambios en los atributos (clases)
      this.bodyObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['class'],
      });

      // --- 2. LÓGICA EXISTENTE DE SCROLL (Corregida) ---
      window.addEventListener('scroll', () => {
        // Bloqueo total si la imagen está abierta
        if (document.body.classList.contains('lightbox-open')) {
          return; // No calculamos nada mientras se ve una foto
        }

        // Bloqueo si el menú móvil está abierto (queremos ver el header)
        const isMenuOpen = document.querySelector('.navbar-menu.open');
        if (isMenuOpen) {
          if (this.hidden()) this.hidden.set(false);
          return;
        }

        const currentScroll = window.scrollY;

        // Umbral superior
        if (currentScroll <= 120) {
          if (this.hidden()) this.hidden.set(false);
          this.lastScroll = currentScroll;
          return;
        }

        // Lógica de dirección normal
        if (currentScroll > this.lastScroll) {
          // Bajando -> Ocultar
          if (!this.hidden()) this.hidden.set(true);
        } else {
          // Subiendo -> Mostrar
          if (this.hidden()) this.hidden.set(false);
        }

        this.lastScroll = currentScroll;
      });
    }
  }

  private checkHeaderStateAfterLightbox() {
    const currentScroll = window.scrollY;
    
    if (currentScroll <= 120) {
      this.hidden.set(false);
      return;
    }

    const isMenuOpen = document.querySelector('.navbar-menu.open');
    if (isMenuOpen) {
      this.hidden.set(false);
      return;
    }

    this.lastScroll = currentScroll;
  }

  ngOnDestroy() {
    // Crucial para no tener fugas de memoria en la web de Villa Los Reyes
    if (this.bodyObserver) {
      this.bodyObserver.disconnect();
    }
  }

}
