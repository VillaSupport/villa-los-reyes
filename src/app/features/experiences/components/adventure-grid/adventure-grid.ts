import { Component, inject, computed, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { ExperiencesService } from '../../services/experience.service';

@Component({
  selector: 'adventure-grid',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './adventure-grid.html',
  styleUrl: './adventure-grid.css',
})
export class AdventureGrid {
  private experienceService = inject(ExperiencesService);
  private route = inject(ActivatedRoute);

  // 1. Capturamos los parámetros de la URL como Signal
  private params = toSignal(this.route.paramMap);
  
  // 2. Extraemos el nombre de la categoría
  public categoryName = computed(() => this.params()?.get('category') || '');

  // 3. Obtenemos los datos del servicio basándonos en la categoría actual
  // Al ser un computed que llama al servicio, reacciona si la categoría cambia
  public adventures = toSignal(
    this.experienceService.getCategoryDetails(this.categoryName())
  );

  // 4. Título dinámico para el h2
  public categoryTitle = computed(() => this.adventures()?.title || '...');

  // constructor() {
  //   // ESTE ES TU LABORATORIO DE PRUEBAS DENTRO DEL COMPONENTE
  //   effect(() => {
  //     console.log('--- 🛡️ DEBUG ADVENTURE GRID ---');
      
  //     const currentCategory = this.categoryName();
  //     console.log('📍 Categoría en la URL:', currentCategory);

  //     const data = this.adventures();
  //     if (!data) {
  //       console.warn('⏳ Esperando datos o categoría no encontrada...');
  //     } else {
  //       console.log('✅ Datos recibidos del JSON:', data);
  //       console.log('📝 Título computado:', this.categoryTitle());
  //       console.table(data.adventures); // Muestra las tarjetas en una tabla bonita
  //     }
  //   });
  // }
}


