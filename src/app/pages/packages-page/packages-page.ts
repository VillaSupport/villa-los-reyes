import { Component } from '@angular/core';
import { Position } from '../../components/shared/interfaces/app-interfaces';
import { DiscoverPackageDefaultAll } from "../../presets/discover-package-default-all/discover-package-default-all";
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [DiscoverPackageDefaultAll, PageHeader],
  templateUrl: './packages-page.html',
  styleUrls: ['./packages-page.css']
})
export class PackagesPage {
  header: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };

    objectPosition: Position;
  } = {
      title: 'Paquetes y Ofertas',
      description: 'Explora nuestras opciones y encuentra la experiencia perfecta para ti.',
      image: {
        src: '/assets/images/adventures/slide-the-most-famous.jpg',
        alt: 'Paquetes y ofertas'
      },
      objectPosition: 'center center'
    };


}
