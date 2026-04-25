import {
  Component,
  effect,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangSelector } from './lang-selector/lang-selector';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [LangSelector, TranslatePipe, RouterLink, RouterLinkActive],
})
export class Navbar {
  private platformId = inject(PLATFORM_ID);
  private translate = inject(TranslateService);
  private isBrowser = isPlatformBrowser(this.platformId);

  menuOpen = signal(false);
  navbarHidden = signal(false);
  private lastScroll = 0;

  readonly navLinks = [
    { path: '/home', label: 'NAVBAR.HOME' },
    { path: '/about', label: 'NAVBAR.ABOUT' },
    { path: '/services-facilities', label: 'NAVBAR.SERVICES' },
    { path: '/experiences', label: 'NAVBAR.EXPERIENCES' },
    { path: '/reviews', label: 'NAVBAR.REVIEWS' },
    { path: '/packages', label: 'NAVBAR.PACKAGES' },
  ];

  readonly navLabels = {
    bookNow: 'NAVBAR.BOOK_NOW',
    language: 'NAVBAR.LANGUAGE',
  };

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      // Bloquea el scroll del body si el menú está abierto
      document.body.style.overflow = this.menuOpen() ? 'hidden' : 'auto';
    });
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  private readonly whatsapp =
    environment.contactBusiness.whatsapp;


handleBooking(): void {
  if (isPlatformBrowser(this.platformId)) {
    const lang = (this.translate.getCurrentLang() || 'es') as 'es'|'en'|'fr';
    
    const message = encodeURIComponent(this.whatsapp.defaultMessage[lang]);
    
    const url = `https://wa.me/${this.whatsapp.number}?text=${message}`;
    window.open(url, '_blank', 'noopener noreferrer');
  }
}

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser && window.innerWidth > 1280 && this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser) return;

    const currentScroll = window.scrollY;

    // 1. Si el menú está abierto y el usuario hace scroll, cerrarlo
    if (this.menuOpen()) {
      this.menuOpen.set(false);
    }

    // 2. Lógica de ocultar/mostrar el navbar (Sticky behavior)
    if (currentScroll > this.lastScroll && currentScroll > 80) {
      // Bajando: ocultar barra
      this.navbarHidden.set(true);
    } else {
      // Subiendo: mostrar barra
      this.navbarHidden.set(false);
    }

    this.lastScroll = currentScroll;
  }
}
