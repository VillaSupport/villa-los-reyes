import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'promo-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './promo-banner.html',
  styleUrls: ['./promo-banner.css'],
})
export class PromoBanner {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  currentIndex = signal(0);
  private intervalId?: any;

  messages = ['PROMO.ORGANIZE', 'PROMO.SUMMER', 'PROMO.PACKAGES'];

  ngOnInit() {
    if (this.isBrowser) {
      this.startRotation();
    }
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.nextMessage();
    }, 5000);
  }

  nextMessage() {
    this.currentIndex.update((v) => (v + 1) % this.messages.length);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
