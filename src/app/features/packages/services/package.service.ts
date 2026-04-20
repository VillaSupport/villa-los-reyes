import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Observable, switchMap, catchError, of, map } from "rxjs";
import { LanguageService } from "../../../shared/services/language.service";
import { PackageData } from "../interfaces/packages.interface";

@Injectable({
    providedIn: 'root'
})
export class PackageService {
    private http = inject(HttpClient);
    private langService = inject(LanguageService); // Inyectamos el estado global del idioma
    private readonly PATH = 'assets/data/packages';

    private currentLang$ = toObservable(this.langService.currentLang);

    getAllPackages = (): Observable<PackageData[]> =>
        this.currentLang$.pipe(
            switchMap(lang => 
                this.http.get<PackageData[]>(`${this.PATH}/${lang}.json`).pipe(
                    catchError((error) => {
                        console.error(`[PackageService]: Error cargando paquetes en ${lang}`, error);
                        return of([]);
                    })
                )
            )
        );

    getPackageBySlug = (slug: string): Observable<PackageData | undefined> =>
        this.getAllPackages().pipe(
            map(packages => packages.find(p => p.slug === slug))
        );
}

