import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Benefit, StayBenefitsDetail } from '../interfaces/services-facilities.interface';

@Injectable({
    providedIn: 'root'
})
export class GuestBenefitsService {
    private http = inject(HttpClient);
    private readonly PATH = 'assets/data/services-facilities/stay-benefits';

    getCategoryDetails = (lang = 'es'): Observable<StayBenefitsDetail | undefined> =>
        this.http.get<StayBenefitsDetail>(`${this.PATH}/${lang}.json`).pipe(
            catchError(() => of(undefined))
        );

    getBenefitBySlug = (slug: string, lang = 'es'): Observable<Benefit | undefined> =>
        this.getCategoryDetails(lang).pipe(
            map(detail => detail?.benefits.find(b => b.slug === slug))
        );
}