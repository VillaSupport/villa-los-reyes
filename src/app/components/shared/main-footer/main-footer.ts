import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// FontAwesome Imports
import { FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'footer-section',
  imports: [FaIconComponent,TranslatePipe],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css'
})
export class FooterSection {
  currentYear = new Date().getFullYear();

  // 🔥 Social links centralizados
  socialLinks = [
    { icon: 'facebook-f', url: 'https://facebook.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'facebook-messenger', url: 'https://m.me/' },
    { icon: 'whatsapp', url: 'https://wa.me/5352741734' }
  ];

  contacts = [
    // Teléfonos
    { type: 'contact', icon: 'phone', label: '(+53) 48 793317', value: '+53 48 793317', copy: true },
    { type: 'contact', icon: 'smartphone', label: '(+53) 5 2741734', value: '+53 5 2741734', copy: true },

    // Email
    { type: 'contact', icon: 'mail', label: 'joanmanuel2008@yahoo.es', url: 'mailto:joanmanuel2008@yahoo.es' },

    // Dirección
    {
      type: 'address', icon: 'location_on', label: 'Calle Salvador Cisneros #206-C, Viñales, Pinar del Río, Cuba',
      url: 'https://maps.app.goo.gl/ocppjEAutwcchVzGA'
    }
  ];


  copiedNumber = signal<string | null>(null)

  constructor(library: FaIconLibrary) {
    // Registrar solo los iconos usados
    library.addIcons(
      faFacebookF, faInstagram, faFacebookMessenger, faWhatsapp,
      faPhone, faEnvelope, faLocationDot, faCommentDots
    );
  }

  openWhatsApp() {
    const message = encodeURIComponent(
      '¡Hola!.Me gustaría recibir más información sobre las opciones de alojamiento y los servicios disponibles en Villa Los Reyes'
    );
    window.open(`https://wa.me/5352741734?text=${message}`, '_blank');
  }

  copyNumber(value: string) {
    this.copiedNumber.set(value);

    setTimeout(() => this.copiedNumber.set(null), 2000);
  }
}


