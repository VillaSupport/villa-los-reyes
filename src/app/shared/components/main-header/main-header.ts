import { Component, HostBinding, OnInit } from '@angular/core';
import { PromoBanner } from './promo-banner/promo-banner';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [Navbar, PromoBanner],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader implements OnInit {

  @HostBinding('class.hidden') hidden = false;

  private lastScroll = 0;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      // Siempre visible si está arriba del todo
      if (currentScroll <= 120) {
        this.hidden = false;
        this.lastScroll = currentScroll;
        return;
      }

      // BAJANDO → ocultar
      if (currentScroll > this.lastScroll) {
        this.hidden = true;
      }
      // SUBIENDO → mostrar
      else {
        this.hidden = false;
      }

      this.lastScroll = currentScroll;
    });
  }
}
