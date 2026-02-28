import { Component, signal } from '@angular/core';
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'app-main-header-lab-component',
  imports: [PageHeader],
  templateUrl: './main-header-lab-component.html',
  styleUrl: './main-header-lab-component.css',
})
export class MainHeaderLabComponent {
mockData = {
    head: { 
      title: 'Explora las Terrazas', 
      description: 'Un paraíso natural sostenible en el corazón de la <strong>Sierra del Rosario</strong>.' 
    },
    image: { 
      src: ' ', 
      alt: 'Vista de la montaña' 
    }
  };
// https://picsum.photos/id/1018/1200/500
  // Signal para simular carga global
  isLoading = signal(true);

  toggleLoading() {
    this.isLoading.update(v => !v);
  }
}
