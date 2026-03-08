import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import parsePhoneNumberFromString, { CountryCode } from "libphonenumber-js";

export class CustomValidators {

  static nameFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const namePattern = /^[a-zA-ZÀ-ÿ\s\-]+$/;
      const isValid = namePattern.test(control.value || '');
      return isValid ? null : { onlyLettersSpacesDashes: true };
    };
  }

  static isPastDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const inputDate = new Date(control.value);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const formattedToday = new Intl.DateTimeFormat(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(today);

      return inputDate > today ? null : { pastDate: { today: formattedToday } };
    };
  }

  static dateRangeValidator(startCtrl: AbstractControl, endCtrl: AbstractControl): ValidatorFn {
    return (): ValidationErrors | null => {
      // ¡Ya no necesitas group.get()! Usas los controles que pasaste por parámetro
      const start = startCtrl.value;
      const end = endCtrl.value;

      if (!start || !end) return null;

      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();

      return endTime > startTime ? null : { invalidRange: true };
    };
  }


  static phoneNumber(countryControl: AbstractControl, phoneControl: AbstractControl): ValidatorFn {
    return (): ValidationErrors | null => {
      const phone = phoneControl.value;
      const countryCode = countryControl.value as CountryCode;

      if (!phone || !countryCode) return null;

      const phoneNumber = parsePhoneNumberFromString(phone, countryCode);

      const isValid = phoneNumber && phoneNumber.isValid();

      return isValid ? null : { invalidPhone: true };
    };
  }

}
