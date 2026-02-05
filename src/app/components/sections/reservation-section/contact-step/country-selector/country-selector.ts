import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as countries from 'i18n-iso-countries';
import { CountryInfo } from '../contact-step'
import { AutoImgDirective } from '../../../../../auto-img.directive';
@Component({
  selector: 'country-selector',
  imports: [AutoImgDirective],
  templateUrl: './country-selector.html',
  styleUrl: './country-selector.css',
})
export class CountrySelector {

  countriesList = input.required<CountryInfo[]>();
  codeControl = input.required<FormControl>();
  countryControl = input.required<FormControl>();
  dialCodeControl = input.required<FormControl>();



  filteredCountries: CountryInfo[] = [];
  isOpen: boolean = false;

  ngOnInit() {
    this.filteredCountries = [...this.countriesList()];
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.filteredCountries = [...this.countriesList()];
    } else {
      // 1. Si el usuario abre el menú y lo cierra sin elegir nada,
      // debemos marcarlo como tocado para que salte el error de "Requerido".
      this.countryControl().markAsTouched();
    }
  }

  get selectedCode(): string {
    return this.codeControl().value
  }
  get selectedCountryName(): string {
    return this.countryControl().value
  }

  selectCountry(country: { isoCode: string, name: string, dialCode: string }) {
    this.isOpen = false;
    this.codeControl().setValue(country.isoCode);
    this.countryControl().setValue(country.name);
    this.dialCodeControl().setValue(country.dialCode);

    // 2. Al seleccionar un país, marcamos como tocado y "sucio" (dirty)
    this.countryControl().markAsTouched();
    this.countryControl().markAsDirty();
  }

  filterCountries(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCountries = this.countriesList().filter(c =>
      c.name.toLowerCase().includes(value)
    );
  }
}
