import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type LanguageCode = 'es' | 'en' | 'fr';

interface Language {
  code: LanguageCode;
  class: string;
}

@Component({
  selector: 'lang-selector',
  templateUrl: './lang-selector.html',
  styleUrl: './lang-selector.css'
})
export class LangSelector implements OnInit {
  // Inicializamos con un valor por defecto
  currentLang!: Language;

  languages: Language[] = [
    { code: 'es', class: 'fi fi-es' },
    { code: 'en', class: 'fi fi-gb' },
    { code: 'fr', class: 'fi fi-fr' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // 1. Al cargar, buscamos si hay un idioma guardado en el navegador
    const savedLang = localStorage.getItem('userLang') as LanguageCode;
    
    // 2. Si existe, lo usamos. Si no, usamos el por defecto de la app
    const langToUse = savedLang || (this.translate.getDefaultLang() as LanguageCode) || 'es';
    
    // 3. Buscamos el objeto completo de idioma para que el selector se vea bien
    this.currentLang = this.languages.find(l => l.code === langToUse) || this.languages[0];
    
    // 4. Aplicamos el idioma
    this.translate.use(this.currentLang.code);
  }

  setLanguage(lang: Language) {
    this.currentLang = lang;
    this.translate.use(lang.code);
    
    // 5. PERSISTENCIA: Guardamos la elección para cuando recargue la página
    localStorage.setItem('userLang', lang.code);
  }
}


