import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { GalleryThumbsGrid } from "../../shared/components/gallery-thumbs-grid/gallery-thumbs-grid";
import { ImgData } from '../../shared/interfaces/common.interface';

@Component({
  selector: 'test-gallery-component',
  standalone: true,
  imports: [GalleryThumbsGrid],
  template: `
    <div class="test-container">
      <h2>Prueba de Skeletons: Villa Los Reyes</h2>
      
      <div class="status-panel">
        <p><strong>Estado API Principal:</strong> 
          @if (mainImageData()) {
            <span class="success">✅ Datos recibidos</span>
          } @else {
            <span class="loading">
              ⏳ Cargando... Faltan <strong>{{ secondsLeft() }}</strong> segundos
            </span>
          }
        </p>
        <div class="progress-bar">
          <div class="fill" [style.width.%]="(secondsLeft() / 15) * 100"></div>
        </div>
      </div>

      <gallery-thumbs-grid
        [mainImage]="mainImageData()"
        [showThumbs]="false"
      />
    </div>
  `,
  styles: [`
    .test-container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 1rem;
      font-family: system-ui, sans-serif;
    }
    .status-panel {
      background: #f0f4f8;
      padding: 1.5rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid #d1d5db;
    }
    .progress-bar {
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
    }
    .fill {
      height: 100%;
      background: #3b82f6;
      transition: width 1s linear;
    }
    .success { color: #0d9488; font-weight: bold; }
    .loading { color: #d97706; font-weight: bold; }
  `]
})
export class TestGalleryComponent implements OnInit, OnDestroy {
  mainImageData = signal<ImgData>(undefined as unknown as ImgData);
  secondsLeft = signal(15);
  private timerInterval: any;

  ngOnInit() {
    console.log('Iniciando cuenta regresiva de 15 segundos...');

    this.timerInterval = setInterval(() => {
      this.secondsLeft.update(s => s - 1);

      if (this.secondsLeft() <= 0) {
        this.resolveApi();
      }
    }, 1000);
  }

  private resolveApi() {
    clearInterval(this.timerInterval);
    console.log('¡Tiempo cumplido! Renderizando imagen...');
    
    this.mainImageData.set({
      src: 'https://picsum.photos/1200/800', 
      alt: 'Habitación de prueba Villa Los Reyes'
    });
  }

  ngOnDestroy() {
    // Limpieza de seguridad si cierras el componente antes de los 15s
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}