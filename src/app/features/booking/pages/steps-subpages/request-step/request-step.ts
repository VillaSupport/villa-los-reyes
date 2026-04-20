import { HttpClient } from '@angular/common/http';
import { Component, input, output } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'request-step',
  imports: [FaIconComponent,TranslatePipe],
  templateUrl: './request-step.html',
  styleUrl: './request-step.css',
})
export class RequestStep {
  // Input para determinar si mostramos el éxito o el error
  // El padre debe pasar 'true' si el envío falló.
  hasError = input<boolean>(false);

  // Acceso a los datos centralizados del negocio
  business = environment.business;

  completed = output<void>();


  constructor(library: FaIconLibrary) {
    // 🔥 Registramos solo el icono de WhatsApp que usaremos
    library.addIcons(faWhatsapp);
  }
  
  ngOnInit(): void {
    if (!this.hasError()) {
      this.notifyCompletion();
    }
  }

  private notifyCompletion() {
    this.completed.emit();
  }
}
