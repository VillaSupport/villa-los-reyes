import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HeaderData } from '../shared/interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  getHeaderData(): Observable<any> {
    const data: HeaderData = {
      title: 'Experiencias y Aventuras',
      description: 'Descubre la magia de Viñales a través de aventuras diseñadas para conectar con la naturaleza.',
      img: {
        src: '/assets/imgs/headers/experiences/experiences-header.webp',
        alt: 'Campesino trabajando en Viñales'
      }
    };
    // Simulamos 3 segundos de espera
    return of(data).pipe(delay(9000));
  }
}
