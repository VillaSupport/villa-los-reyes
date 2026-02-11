import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { FeatureItem } from '../../../shared/interfaces/feature-overview.interface';

@Injectable({
    providedIn: 'root'
})
export class ServicesMainService {
    private http = inject(HttpClient);

    private readonly PATH = 'assets/data/services-facilities';

    getServicesMain = (lang = 'es'): Observable<FeatureItem[] | undefined> =>
        this.http.get<FeatureItem[]>(`${this.PATH}/services-main.${lang}.json`).pipe(
            catchError(() => {
                // console.error(`No se pudo cargar el archivo en: ${this.PATH}/services-main.${lang}.json`);
                return of(undefined);
            })
        );
}