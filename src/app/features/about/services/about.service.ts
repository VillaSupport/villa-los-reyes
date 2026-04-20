import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LanguageService } from "../../../shared/services/language.service";
import { Observable, switchMap, catchError, of, map } from "rxjs";  
import { AboutData } from "../interfaces/about.interfaces";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({ providedIn: 'root' })
export class AboutService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);
  private readonly PATH = 'assets/data/about';

   private currentLang$ = toObservable(this.langService.currentLang);

  getAboutData = (): Observable<AboutData[] | undefined> =>
    this.currentLang$.pipe(
      switchMap((lang) => 
        this.http.get<AboutData[]>(`${this.PATH}/${lang}.json`).pipe(
          catchError((error) => {
            console.error(`Error cargando about.${lang}.json:`, error);
            return of(undefined);
          })
        )
      )
    );

  getSectionBySlug = (slug: string): Observable<AboutData | undefined> =>
    this.getAboutData().pipe(
      map((sections) => sections?.find((s) => s.slug === slug))
    );
}