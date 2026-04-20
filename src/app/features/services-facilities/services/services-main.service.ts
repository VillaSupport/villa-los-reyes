import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap, catchError, of } from 'rxjs';
import { FeatureItem } from '../../../shared/interfaces/feature-overview.interface';
import { LanguageService } from '../../../shared/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class ServicesMainService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);
  private readonly PATH = 'assets/data/services-facilities';

  private currentLang$ = toObservable(this.langService.currentLang);

  getServicesMain = (): Observable<FeatureItem[] | undefined> =>
    this.currentLang$.pipe(
      switchMap((lang) =>
        this.http
          .get<FeatureItem[]>(`${this.PATH}/services-main.${lang}.json`)
          .pipe(
            catchError((error) => {
              console.error(
                `[ServicesMainService]: Error cargando services-main.${lang}.json`,
                error,
              );
              return of(undefined);
            }),
          ),
      ),
    );
}
