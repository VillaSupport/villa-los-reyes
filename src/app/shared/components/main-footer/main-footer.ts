import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// FontAwesome Imports
import {
  FaIconLibrary,
  FaIconComponent,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'main-footer',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css',
})
export class MainFooter {
  private platformId = inject(PLATFORM_ID);
  private readonly config = environment.contactBusiness;
  private translate = inject(TranslateService);

  socialLinks = [
    { icon: 'facebook-f', url: this.config.social.facebook },
    { icon: 'instagram', url: this.config.social.instagram },
    { icon: 'facebook-messenger', url: this.config.social.messenger },
    { icon: 'whatsapp', url: `https://wa.me/${this.config.whatsapp.number}` },
  ];

  contacts = [
    ...this.config.phones.map((p, i) => ({
      type: 'contact',
      icon: i === 0 ? 'icon-call' : 'icon-smartphone',
      label: p.label,
      value: p.value,
      copy: true,
    })),
    {
      type: 'contact',
      icon: 'icon-mail',
      label: this.config.email,
      url: `mailto:${this.config.email}`,
    },
    {
      type: 'address',
      icon: 'icon-location_on',
      label: this.config.address.label,
      url: this.config.address.mapUrl,
    },
  ];

  currentYear = new Date().getFullYear();
  copiedNumber = signal<string | null>(null);

  constructor(library: FaIconLibrary) {
    // Registrar solo los iconos usados
    library.addIcons(
      faFacebookF,
      faInstagram,
      faFacebookMessenger,
      faWhatsapp,
      faPhone,
      faEnvelope,
      faLocationDot,
      faCommentDots,
    );
  }

  openWhatsApp() {
    // Verificamos si estamos en el navegador antes de usar 'window'
    if (isPlatformBrowser(this.platformId)) {
      const message = encodeURIComponent(
        this.config.whatsapp.defaultMessage['es'],
      );
      const url = `https://wa.me/${this.config.whatsapp.number}?text=${message}`;
      window.open(url, '_blank');
    }
  }

  handleBooking(): void {
    if (isPlatformBrowser(this.platformId)) {
      const lang = (this.translate.getCurrentLang() || 'es') as
        | 'es'
        | 'en'
        | 'fr';

      const message = encodeURIComponent(
        this.config.whatsapp.defaultMessage[lang],
      );

      const url = `https://wa.me/${this.config.whatsapp.number}?text=${message}`;
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }

  copyNumber(value: string) {
    // Navigator (clipboard) también requiere estar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.copiedNumber.set(value);
      navigator.clipboard.writeText(value); // Opcional: copiar de verdad al portapapeles
      setTimeout(() => this.copiedNumber.set(null), 2000);
    }
  }
}
