import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap, catchError, of, map } from 'rxjs';
import { FeatureItem } from '../../../shared/interfaces/feature-overview.interface';
import { LanguageService } from '../../../shared/services/language.service';
import { CategoryDetail, Adventure } from '../interfaces/experience.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  private readonly PATH = 'assets/data/experiences';

    private currentLang$ = toObservable(this.langService.currentLang);

  getExperiences = (): Observable<FeatureItem[] | undefined> =>
    this.currentLang$.pipe(
      switchMap((lang) =>
        this.http
          .get<FeatureItem[]>(`${this.PATH}/experiences.${lang}.json`)
          .pipe(
            catchError((error) => {
              console.error(
                `[ExperiencesService]: Error cargando experiencias en ${lang}`,
                error,
              );
              return of(undefined);
            }),
          ),
      ),
    );

  getCategoryDetails = (
    category: string,
  ): Observable<CategoryDetail | undefined> =>
    this.currentLang$.pipe(
      switchMap((lang) =>
        this.http
          .get<CategoryDetail>(
            `${this.PATH}/categories/${category}/${lang}.json`,
          )
          .pipe(
            catchError((error) => {
              console.error(
                `[ExperiencesService]: Error cargando categoría ${category} en ${lang}`,
                error,
              );
              return of(undefined);
            }),
          ),
      ),
    );

  getAdventureBySlug = (
    category: string,
    slug: string | number,
  ): Observable<Adventure | undefined> =>
    this.getCategoryDetails(category).pipe(
      map((detail) => detail?.adventures.find((a) => a.slug === slug)),
    );
}
