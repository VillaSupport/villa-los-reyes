import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";
import { DiscoverAllPackageSection } from "../../components/sections/discover-all-package-section/discover-all-package-section";
import { packages } from '../../config/packages-data';

@Component({
  selector: 'discover-package-default-all',
  imports: [DiscoverAllPackageSection],
  template: `
  <discover-all-package-section
      [packages]="packages" [header]="header"
    ></discover-all-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultAll {
// TODO: Reparar esto para las traducciones

  header = {
    title: 'Ofertas disponibles',
    description: 'Descubre nuestros paquetes promocionales y ahorra mientras disfrutas de ofertas exclusivas diseñadas para ti. ¡Aprovecha ahora!'
  };


  packages = packages
}
