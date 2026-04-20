import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap, catchError, of, map } from 'rxjs';
import { LanguageService } from '../../../shared/services/language.service';
import {
  StayBenefitsDetail,
  Benefit,
} from '../interfaces/services-facilities.interface';

@Injectable({
  providedIn: 'root',
})
export class StayBenefitsService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);
  private readonly PATH =
    'assets/data/services-facilities/categories/stay-benefits';

  private currentLang$ = toObservable(this.langService.currentLang);

  getStayBenefits = (): Observable<StayBenefitsDetail | undefined> =>
    this.currentLang$.pipe(
      switchMap((lang) =>
        this.http.get<StayBenefitsDetail>(`${this.PATH}/${lang}.json`).pipe(
          catchError((error) => {
            console.error(
              `[StayBenefitsService]: Error cargando beneficios (${lang})`,
              error,
            );
            return of(undefined);
          }),
        ),
      ),
    );

  getBenefitBySlug = (slug: string): Observable<Benefit | undefined> =>
    this.getStayBenefits().pipe(
      map((detail) => detail?.benefits.find((b) => b.slug === slug)),
    );
}
