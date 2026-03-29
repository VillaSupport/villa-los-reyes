import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AboutData } from '../interfaces/about.interfaces';
// Importa las interfaces desde su archivo correspondiente
// import { AboutData } from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private http = inject(HttpClient);
  private readonly PATH = 'assets/data/about'; // Asegúrate de que esta sea la ruta real

  /**
   * Obtiene todas las secciones del "About" según el idioma
   */
  getAboutData = (lang = 'es'): Observable<AboutData[] | undefined> =>
    this.http.get<AboutData[]>(`${this.PATH}/${lang}.json`).pipe(
      catchError(() => {
        console.error(`No se pudo cargar el archivo about.${lang}.json`);
        return of(undefined);
      })
    );

  /**
   * Obtiene una sección específica por su slug (ej: 'location' o 'comfort')
   */
  getSectionBySlug = (slug: string, lang = 'es'): Observable<AboutData | undefined> =>
    this.getAboutData(lang).pipe(
      map(sections => sections?.find(section => section.slug === slug))
    );
}