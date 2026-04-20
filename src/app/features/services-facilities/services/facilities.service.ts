import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap, map, catchError, of, filter } from 'rxjs';
import {
  FacilitiesDetail,
  RoomSpace,
  RoomData,
  CommonSpace,
} from '../interfaces/services-facilities.interface';

@Injectable({ providedIn: 'root' })
export class FacilitiesService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);
  private readonly PATH =
    'assets/data/services-facilities/categories/facilities';

  private currentLang$ = toObservable(this.langService.currentLang);

  private getFacilitiesWithContext = (): Observable<{
    lang: string;
    detail: FacilitiesDetail | undefined;
  }> =>
    this.currentLang$.pipe(
      switchMap((lang) =>
        this.http.get<FacilitiesDetail>(`${this.PATH}/${lang}.json`).pipe(
          map((detail) => ({ lang, detail })),
          catchError(() => of({ lang, detail: undefined })),
        ),
      ),
    );

  getFacilitiesDetail = (): Observable<FacilitiesDetail | undefined> =>
    this.getFacilitiesWithContext().pipe(map((res) => res.detail));

  getRoomSpaces = (): Observable<RoomSpace> =>
    this.getFacilitiesWithContext().pipe(
      filter(
        (res): res is { lang: string; detail: FacilitiesDetail } =>
          !!res.detail,
      ),
      map(({ lang, detail }) => {
        const space = detail.spaces.find((s) => s.type === 'rooms');
        if (!space) {
          console.warn(
            `[FacilitiesService]: No se encontró 'rooms' en: ${lang}.json`,
          );
          throw new Error('Room space not found');
        }
        return space as RoomSpace;
      }),
    );

  getRoomById = (id: string): Observable<RoomData> =>
    this.getRoomSpaces().pipe(
      map((roomSpace) => {
        const room = roomSpace.items.find((item) => item.id === id);
        if (!room) throw new Error(`Room with id ${id} not found`);
        return room;
      }),
    );

  getCommonSpaces = (): Observable<CommonSpace[]> =>
    this.getFacilitiesDetail().pipe(
      filter((detail): detail is FacilitiesDetail => !!detail),
      map(
        (detail) =>
          (detail.spaces.filter((s) => s.type === 'common') as CommonSpace[]) ??
          [],
      ),
    );
}
