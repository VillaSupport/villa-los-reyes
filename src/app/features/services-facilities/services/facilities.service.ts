import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, filter, map, of } from 'rxjs';
import {
  CommonSpace,
  FacilitiesDetail,
  RoomData,
  RoomSpace,
  Space,
} from '../interfaces/services-facilities.interface';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  private http = inject(HttpClient);
  private readonly PATH =
    'assets/data/services-facilities/categories/facilities';

  getFacilitiesDetail = (
    lang = 'es',
  ): Observable<FacilitiesDetail | undefined> =>
    this.http
      .get<FacilitiesDetail>(`${this.PATH}/${lang}.json`)
      .pipe(catchError(() => of(undefined)));

  getRoomSpaces = (lang = 'es'): Observable<RoomSpace> =>
    this.getFacilitiesDetail(lang).pipe(
      // 1. Filtramos para que solo pasen detalles que existan
      filter((detail): detail is FacilitiesDetail => !!detail),
      map((detail) => {
        const space = detail.spaces.find((s: Space) => s.type === 'rooms');

        // 2. Si no existe el tipo 'rooms', lanzamos un error o warn
        if (!space) {
          console.warn(
            `[FacilitiesService]: No se encontró el espacio 'rooms' para el idioma: ${lang}`,
          );
          throw new Error('Room space not found');
        }

        return space as RoomSpace;
      }),
    );


    // Agrega esta función a tu FacilitiesService
getRoomById(id: string, lang = 'es'): Observable<RoomData> {
  return this.getRoomSpaces(lang).pipe(
    map(roomSpace => {
      // Buscamos la habitación específica dentro del array de items
      const room = roomSpace.items.find(item => item.id === id);
      if (!room) throw new Error(`Room with id ${id} not found`);
      return room;
    })
  );
}
  getCommonSpaces = (lang = 'es'): Observable<CommonSpace[]> =>
    this.getFacilitiesDetail(lang).pipe(
      filter((detail): detail is FacilitiesDetail => !!detail),
      map((detail) => {
        const filtered = detail?.spaces.filter(
          (s: Space) => s.type === 'common',
        );
        return (filtered as CommonSpace[]) ?? [];
      }),
    );
}
