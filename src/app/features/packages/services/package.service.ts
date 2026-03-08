import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Package } from '../interfaces/packages.interface';



@Injectable({
    providedIn: 'root'
})
export class PackageService {
    private http = inject(HttpClient);
    private readonly PATH = 'assets/data/packages';

   
    getAllPackages = (lang = 'es'): Observable<Package[]> =>
        this.http.get<Package[]>(`${this.PATH}/${lang}.json`).pipe(
            catchError(() => of([]))
        );
   
    getPackageBySlug = (slug: string, lang = 'es'): Observable<Package | undefined> =>
        this.getAllPackages(lang).pipe(
            map(packages => packages.find(p => p.slug === slug))
        );
}