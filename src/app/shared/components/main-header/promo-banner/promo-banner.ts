import { Component, signal } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'promo-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './promo-banner.html',
  styleUrls: ['./promo-banner.css']
})
export class PromoBanner {
  currentIndex = signal(0);
  intervalId?: any;

  // se usarán las keys de traducción, no los textos directos
  messages = [
    'promo.organiza',
    'promo.verano',
    'promo.paquetes'
  ];

  constructor() {
    this.startRotation();
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.nextMessage();
    }, 5000);
  }

  nextMessage() {
    this.currentIndex.update(v => (v + 1) % this.messages.length);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
