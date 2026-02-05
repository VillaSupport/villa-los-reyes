import { FormControl, AbstractControl } from '@angular/forms';


const ERROR_MESSAGES: any = {
  es: {
    required: () => 'Este campo es obligatorio',
    maxlength: (err: any) => `Máximo ${err.requiredLength} caracteres permitidos`,
    onlyLettersSpacesDashes: () => 'Solo se permiten letras, espacios y guiones',
    email: () => 'El formato de correo no es válido',
    invalidPhone: () => 'El número de teléfono no es válido para el país',
    min: (err: any) => `El valor mínimo es ${err.min}`,
    pastDate: (err: any) => `La fecha debe ser posterior a ${err.today}`
  },
  en: {
    required: () => 'This field is required',
    maxlength: (err: any) => `Maximum ${err.requiredLength} characters allowed`,
    onlyLettersSpacesDashes: () => 'Only letters, spaces and dashes are allowed',
    email: () => 'Invalid email format',
    invalidPhone: () => 'Invalid phone number for the selected country',
    min: (err: any) => `Minimum value is ${err.min}`,
    pastDate: (err: any) => `The date must be after ${err.today}`
  },
  fr: {
    required: () => 'Ce champ est obligatoire',
    maxlength: (err: any) => `Maximum de ${err.requiredLength} caractères autorisés`,
    onlyLettersSpacesDashes: () => 'Seuls les lettres, espaces et tirets sont autorisés',
    email: () => 'Le format de l’e-mail n’est pas valide',
    invalidPhone: () => 'Le numéro de téléphone n’est pas valide pour le pays',
    min: (err: any) => `La valeur minimale est ${err.min}`,
    pastDate: (err: any) => `La date doit être postérieure au ${err.today}`
  }
};

export class FormUtils {

  static isInvalidField(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  static getErrorMessage(control: AbstractControl, lang: string = 'es'): string {
    const errors = control.errors;
    if (!errors) return '';

    // Obtenemos la primera llave de error (ej: 'required')
    const firstKey = Object.keys(errors)[0];

    // Buscamos si tenemos esa llave en nuestro diccionario para el idioma elegido
    const messageFn = ERROR_MESSAGES[lang][firstKey];

    if (messageFn) {
      // Ejecutamos la función pasando la data del error (para los límites y mínimos)
      return messageFn(errors[firstKey]);
    }

    return `[Error no registrado: ${firstKey}]`;
  }

}
