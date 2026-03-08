import { Component } from '@angular/core';
import { DetailedGallery } from "../../shared/components/detailed-gallery/detailed-gallery";
import { InfoData } from '../../shared/components/info-block/info-block';
import { HeaderData, ImgData } from '../../shared/interfaces/common.interface';
import { Position } from '../../components/shared/interfaces/app-interfaces';
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'detailed-gallery-test',
  imports: [DetailedGallery, PageHeader],
  template: `
    <page-header
    [header]="header"
    
  ></page-header>
    <div style="margin-top: -100px;"> <detailed-gallery 
        [images]="mockImages" 
        [info]="mockInfo" 
        [reverse]="false" 
        [whiteBg]="false" 
        [overlap]="true"
        />
        
      <detailed-gallery 
        [images]="mockImages" 
        [info]="mockInfo" 
        [reverse]="true" 
        [whiteBg]="true" 
        [overlap]="true"
        />
    </div>
  `,
  styleUrl: './detailed-gallery-test.css',
})
export class DetailedGalleryTest {
  header:HeaderData = {
    title: 'experiencesContent.header.title',
    description: 'experiencesContent.header.description',
    img: { src: '/assets/images/experiences/experiences-header.jpg', alt: 'experiencesContent.header.alt' },
  };

  mockImages: ImgData[] = [
    { src: 'https://picsum.photos/800/600?random=1', alt: 'Imagen Principal' },
    { src: 'https://picsum.photos/200/200?random=2', alt: 'Thumb 1' },
    { src: 'https://picsum.photos/200/200?random=3', alt: 'Thumb 2' },
    { src: 'https://picsum.photos/200/200?random=4', alt: 'Thumb 3' }
  ];

  mockInfo: InfoData = {
    title: 'Del infierno al paraíso',
    desc: 'La experiencia comienza saliendo del bullicio de la ciudad, donde el ruido, el tráfico y la prisa marcan el ritmo diario, una especie de infierno moderno. Poco a poco, el camino se abre paso hacia el Valle de Viñales, donde el silencio, el verde intenso y el aire limpio transforman el entorno en un auténtico paraíso. A pie, se recorren senderos que conducen a un mirador con vistas a Viñales y Palmarito. En el trayecto, se visita la comunidad de Los Acuáticos, donde los habitantes comparten sus tradiciones y modo de vida. La jornada concluye con un regreso en coche de caballos, cerrando un viaje que va, literalmente, del caos urbano a la paz del valle.', 
    featureTitle: 'Se recomienda llevar:',
    features: ['Calzado cerrado', 'Pantalones largos', 'Botella de agua','Repelente para mosquitos','Protector solar'],
    linkText: 'Ver más detalles',
    slug: '/detalles-producto'
  };
}
