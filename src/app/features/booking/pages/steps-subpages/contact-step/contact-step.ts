import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountrySelector } from '../../../components/country-selector/country-selector';
import {
  CountryCode,
  getCountryCallingCode,
  getExampleNumber,
} from 'libphonenumber-js';
import { CustomValidators } from '../../../../../utils/custom-validators';
import { FormUtils } from '../../../../../utils/form-utils';
import { ReservationStateService } from '../../../services/reservation-state-service';
import { TranslatePipe} from '@ngx-translate/core';
import { ValidationFeedback } from '../../../components/validation-feedback/validation-feedback';
import examples from 'libphonenumber-js/mobile/examples';

export interface CountryInfo {
  name: string; // Nombre (España, México)
  isoCode: string; // ISO (ES, MX)
  dialCode: string; // Prefijo (+34, +52)
}

@Component({
  selector: 'contact-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountrySelector,
    ValidationFeedback,
    TranslatePipe,
  ],
  templateUrl: './contact-step.html',
  styleUrl: './contact-step.css',
})
export class ContactStep implements OnInit {
  private state = inject(ReservationStateService);
  next = output<void>();
  prev = output<void>();
  stepNumber = input.required<number>();

  onNextStep() {
    if (this.contactForm.valid) {
      this.state.saveStep(this.stepNumber(), this.contactForm.value);
      this.next.emit();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onGoBack() {
    this.prev.emit();
  }

  get guestData() {
    return this.state.getStep(0) || { adults: 0, children: 0 };
  }

  get adultsCount(): number {
    return this.guestData.adults || 0;
  }

  get childrenCount(): number {
    return this.guestData.children || 0;
  }
  private readonly dialPriority: Record<string, string> = {
    '1': 'US',
    '7': 'RU',
    '39': 'IT',
    '44': 'GB',
    '47': 'NO',
    '61': 'AU',
    '212': 'MA',
    '262': 'RE',
    '358': 'FI',
    '590': 'GP',
    '599': 'CW',
  };

  private readonly specialCountries = new Set([
    'AQ',
    'BV',
    'TF',
    'HM',
    'PN',
    'GS',
    'UM',
  ]);

  public nameControl = new FormControl('', [
    Validators.required,
    CustomValidators.nameFormat(),
    Validators.maxLength(50),
  ]);
  public lastNameControl = new FormControl('', [
    Validators.required,
    CustomValidators.nameFormat(),
    Validators.maxLength(50),
  ]);

  public countryControl = new FormControl('', [Validators.required]);
  public isoCodeControl = new FormControl('', [Validators.required]);
  public dialCodeControl = new FormControl('+', [
    Validators.required,
    Validators.maxLength(4),
  ]);
  public phoneNumberControl = new FormControl('', [Validators.required]);

  public phoneGroup = new FormGroup(
    {
      country: this.countryControl,
      isoCode: this.isoCodeControl,
      dialCode: this.dialCodeControl,
      phoneNumber: this.phoneNumberControl,
    },
    {
      validators: [
        CustomValidators.phoneNumber(
          this.isoCodeControl,
          this.phoneNumberControl,
        ),
      ],
    },
  );

  public emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public notesControl = new FormControl('', [Validators.maxLength(500)]);

  contactForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    phoneData: this.phoneGroup,
    email: this.emailControl,
    notes: this.notesControl,
  });

  countriesList: CountryInfo[] = [];

  formUtils = FormUtils;

  ngOnInit() {
    this.initCountries();
    this.syncDialCodeWithCountry();

    const savedData = this.state.getStep(this.stepNumber());
    if (savedData) {
      // 2. Usamos patchValue.
      // OJO: Como phoneData es un FormGroup anidado, savedData debe tener esa misma estructura.
      this.contactForm.patchValue(savedData);

      // 3. Forzar validación manual por si el validador de teléfono no se dispara solo
      this.contactForm.markAllAsTouched();
    }
  }

  private initCountries() {
    const codes: CountryCode[] = ['AC' , 'AD' , 'AE' , 'AF' , 'AG' , 'AI' , 'AL' , 'AM' , 'AO' , 'AR' , 'AS' , 'AT' , 'AU' , 'AW' , 'AX' , 'AZ' , 'BA' , 'BB' , 'BD' , 'BE' , 'BF' , 'BG' , 'BH' , 'BI' , 'BJ' , 'BL' , 'BM' , 'BN' , 'BO' , 'BQ' , 'BR' , 'BS' , 'BT' , 'BW' , 'BY' , 'BZ' , 'CA' , 'CC' , 'CD' , 'CF' , 'CG' , 'CH' , 'CI' , 'CK' , 'CL' , 'CM' , 'CN' , 'CO' , 'CR' , 'CU' , 'CV' , 'CW' , 'CX' , 'CY' , 'CZ' , 'DE' , 'DJ' , 'DK' , 'DM' , 'DO' , 'DZ' , 'EC' , 'EE' , 'EG' , 'EH' , 'ER' , 'ES' , 'ET' , 'FI' , 'FJ' , 'FK' , 'FM' , 'FO' , 'FR' , 'GA' , 'GB' , 'GD' , 'GE' , 'GF' , 'GG' , 'GH' , 'GI' , 'GL' , 'GM' , 'GN' , 'GP' , 'GQ' , 'GR' , 'GT' , 'GU' , 'GW' , 'GY' , 'HK' , 'HN' , 'HR' , 'HT' , 'HU' , 'ID' , 'IE' , 'IL' , 'IM' , 'IN' , 'IO' , 'IQ' , 'IR' , 'IS' , 'IT' , 'JE' , 'JM' , 'JO' , 'JP' , 'KE' , 'KG' , 'KH' , 'KI' , 'KM' , 'KN' , 'KP' , 'KR' , 'KW' , 'KY' , 'KZ' , 'LA' , 'LB' , 'LC' , 'LI' , 'LK' , 'LR' , 'LS' , 'LT' , 'LU' , 'LV' , 'LY' , 'MA' , 'MC' , 'MD' , 'ME' , 'MF' , 'MG' , 'MH' , 'MK' , 'ML' , 'MM' , 'MN' , 'MO' , 'MP' , 'MQ' , 'MR' , 'MS' , 'MT' , 'MU' , 'MV' , 'MW' , 'MX' , 'MY' , 'MZ' , 'NA' , 'NC' , 'NE' , 'NF' , 'NG' , 'NI' , 'NL' , 'NO' , 'NP' , 'NR' , 'NU' , 'NZ' , 'OM' , 'PA' , 'PE' , 'PF' , 'PG' , 'PH' , 'PK' , 'PL' , 'PM' , 'PR' , 'PS' , 'PT' , 'PW' , 'PY' , 'QA' , 'RE' , 'RO' , 'RS' , 'RU' , 'RW' , 'SA' , 'SB' , 'SC' , 'SD' , 'SE' , 'SG' , 'SH' , 'SI' , 'SJ' , 'SK' , 'SL' , 'SM' , 'SN' , 'SO' , 'SR' , 'SS' , 'ST' , 'SV' , 'SX' , 'SY' , 'SZ' , 'TA' , 'TC' , 'TD' , 'TG' , 'TH' , 'TJ' , 'TK' , 'TL' , 'TM' , 'TN' , 'TO' , 'TR' , 'TT' , 'TV' , 'TW' , 'TZ' , 'UA' , 'UG' , 'US' , 'UY' , 'UZ' , 'VA' , 'VC' , 'VE' , 'VG' , 'VI' , 'VN' , 'VU' , 'WF' , 'WS' , 'XK' , 'YE' , 'YT' , 'ZA' , 'ZM' , 'ZW']
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });



    this.countriesList = codes.map((code => {
      let dial = '';
      try {
        dial = getCountryCallingCode(code);
      } catch {
        dial = '';
      }
      return {
        isoCode : code,
        name: regionNames.of(code) || code,
        dialCode: dial,
      };
    }))
  }

  private syncDialCodeWithCountry() {
    this.dialCodeControl.valueChanges.subscribe((value: string | null) => {
      if (value === null) return;
      // 1. Normalización: Garantiza que el prefijo siempre comience con '+'
      if (!value.startsWith('+')) {
        this.dialCodeControl.setValue('+' + value.replace(/\+/g, ''), {
          emitEvent: false,
        });
        return;
      }

      const currentIso = this.isoCodeControl.value as string;
      const currentDial = value.replace(/\+/g, '');

      // 2. Gestión de limpieza: Si el dial está vacío, reseteamos el país (excepto en casos especiales)
      if (!currentDial && !this.specialCountries.has(currentIso)) {
        this.countryControl.setValue(null, { emitEvent: false });
        this.isoCodeControl.setValue(null, { emitEvent: false });

        this.countryControl.markAsTouched();
        return;
      }

      // 3. Si el país es especial (ej. Antártida), no se actualiza vía dialCode
      if (this.specialCountries.has(currentIso)) {
        return;
      }
      // 4. Resolución de ambigüedad: Si el dial tiene relación 1:N (un prefijo, varios países),
      // usamos el mapa de prioridad; de lo contrario, buscamos por dialCode general.
      const priorityIso = this.dialPriority[currentDial];
      const found = priorityIso
        ? this.countriesList.find((c) => c.isoCode === priorityIso)
        : this.countriesList.find((c) => c.dialCode === currentDial);

      // 5. Sincronización de UI: Actualizamos nombre e ISO solo si el país detectado es diferente
      if (found) {
        if (found.isoCode !== currentIso) {
          this.countryControl.setValue(found.name, { emitEvent: false });
          this.isoCodeControl.setValue(found.isoCode, { emitEvent: false });
        }
      } else {
        // 6. Manejo de valores no reconocidos:
        // Si el código no existe, marcamos como 'INVALID' para feedback visual.
        // Si se borró casi todo, regresamos al estado inicial.
        if (currentDial.length > 0) {
          this.countryControl.setValue('INVALID', { emitEvent: false });
          this.isoCodeControl.setValue(null, { emitEvent: false });
        }
      }
    });
  }

  get phonePlaceholder(): string {
    const iso = this.isoCodeControl.value;
    if (!iso || iso === 'INVALID') return 'CONTACT.PHONE_NUMBER';

    try {
      const example = getExampleNumber(iso as any, examples as any);
      if (!example) return 'CONTACT.PHONE_NUMBER';

      /**
       * Usamos formatInternational() para obtener el espaciado real.
       * Luego removemos el dialCode (ej: +53) para que quede solo el cuerpo.
       * Resultado para Cuba: "5 1234567"
       * Resultado para USA: "(212) 555-1212"
       */
      const dialCode = `+${example.countryCallingCode}`;
      const placeholder = example
        .formatInternational()
        .replace(dialCode, '')
        .trim();

      return placeholder;
    } catch {
      return 'CONTACT.PHONE_NUMBER';
    }
  }

  handleMaxChars(event: KeyboardEvent): void {
    const charCount = this.notesControl.value?.length || 0;
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];

    // Si llegamos a 500 y la tecla no es de las "permitidas" para borrar o navegar, bloqueamos
    if (charCount >= 500 && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  handleDialKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const isNumber = /[0-9]/.test(event.key);
    const isControl = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ].includes(event.key);

    // No permitir borrar el '+' en la posición 0
    if (event.key === 'Backspace' && input.selectionStart === 1) {
      event.preventDefault();
    }
    if (event.key === 'Delete' && input.selectionStart === 0) {
      event.preventDefault();
    }

    if (!isNumber && !isControl) {
      event.preventDefault();
    }
  }
  handlePhoneKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End',
    ];

    // 1. Permitir teclas de control (copiar, pegar, etc.)
    if (
      allowedKeys.includes(event.key) ||
      event.ctrlKey === true ||
      event.metaKey === true
    ) {
      return;
    }

    // 2. Bloquear si intentan borrar el "+" (opcional, según tu lógica)
    // Si el cursor está en la posición 0 y presionan borrar, lo bloqueamos
    const input = event.target as HTMLInputElement;
    if (
      event.key === 'Backspace' &&
      input.selectionStart === 1 &&
      input.value.length === 1
    ) {
      event.preventDefault();
      return;
    }

    // 3. Permitir solo números (0-9)
    const isNumber = /^[0-9]$/.test(event.key);

    if (!isNumber) {
      event.preventDefault();
    }
  }
}
