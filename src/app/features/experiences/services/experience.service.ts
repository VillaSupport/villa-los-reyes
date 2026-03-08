import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs'; // Importante para manejar los flujos de datos
import { FeatureItem } from '../../../shared/interfaces/feature-overview.interface';
import { Adventure, CategoryDetail } from '../interfaces/experience.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ExperiencesService {
    private http = inject(HttpClient);

    private readonly PATH = 'assets/data/experiences';

    getExperiences = (lang = 'es'): Observable<FeatureItem[] | undefined> =>
        this.http.get<FeatureItem[]>(`${this.PATH}/experiences.${lang}.json`).pipe(
            catchError(() => of(undefined))
        );

    getCategoryDetails = (category: string, lang = 'es'): Observable<CategoryDetail | undefined> =>
        this.http.get<CategoryDetail>(`${this.PATH}/categories/${category}/${lang}.json`).pipe(
            catchError(() => of(undefined))
        );

    getAdventureBySlug = (category: string, slug: string | number, lang = 'es'): Observable<Adventure | undefined> =>
        this.getCategoryDetails(category, lang).pipe(
            map(detail => detail?.adventures.find(a => a.slug === slug))
        );


}