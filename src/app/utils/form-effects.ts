import { AbstractControl } from "@angular/forms";

export class FormEffects {
  /**
   * Sincroniza dos fechas basándose en un offset de días.
   */
  static syncDateRange(
    sourceControl: AbstractControl,
    targetControl: AbstractControl,
    daysOffset: number
  ): void {
    sourceControl.valueChanges.subscribe(value => {
      if (!value) return;

      const date = new Date(value);
      date.setDate(date.getDate() + daysOffset);

      const formattedDate = date.toISOString().split('T')[0];

      targetControl.setValue(formattedDate, { emitEvent: false });
      targetControl.markAsTouched();

      // targetControl.updateValueAndValidity();
    });
  }
  
}

