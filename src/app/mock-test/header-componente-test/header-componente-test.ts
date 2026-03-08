import { Component, inject } from '@angular/core';
import { PageHeader } from "../../shared/components/page-header/page-header";
import { HeaderService } from '../header-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-componente-test',
  imports: [PageHeader],
  template: `
    <page-header 
      [header]="headerInfo()" 
      [reserveSpace]="true">
    </page-header>
  `,
})
export class HeaderComponenteTest {
  private headerService = inject(HeaderService);

  // Esta señal cambiará de 'undefined' a 'data' después de 3 segundos
  headerInfo = toSignal(this.headerService.getHeaderData());
}
