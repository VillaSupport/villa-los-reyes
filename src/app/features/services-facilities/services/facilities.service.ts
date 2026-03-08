import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { CommonSpace, FacilitiesDetail, RoomSpace, Space } from '../interfaces/services-facilities.interface';

@Injectable({
    providedIn: 'root'
})
export class FacilitiesService {
    private http = inject(HttpClient);
    private readonly PATH = 'assets/data/services-facilities/categories/facilities';

    getCategoryDetails = (lang = 'es'): Observable<FacilitiesDetail | undefined> =>
        this.http.get<FacilitiesDetail>(`${this.PATH}/${lang}.json`).pipe(
            catchError(() => of(undefined))
        );


    getRoomSpaces = (lang = 'es'): Observable<RoomSpace[]> =>
        this.getCategoryDetails(lang).pipe(
            map(detail => {
                const filtered = detail?.spaces.filter((s: Space) => s.type === 'rooms');
                return (filtered as RoomSpace[]) ?? [];
            })
        );

    getCommonSpaces = (lang = 'es'): Observable<CommonSpace[]> =>
        this.getCategoryDetails(lang).pipe(
            map(detail => {
                const filtered = detail?.spaces.filter((s: Space) => s.type === 'common');
                return (filtered as CommonSpace[]) ?? [];
            })
        );
}