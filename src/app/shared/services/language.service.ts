import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, startWith } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);

  // Un Signal que siempre tiene el idioma actual
  // Se actualiza automáticamente cuando cambia el idioma
  public currentLang = toSignal(
    this.translate.onLangChange.pipe(
      map(e => e.lang),
      startWith(this.translate.getCurrentLang() || 'es')
    ),
    { requireSync: true }
  );
}