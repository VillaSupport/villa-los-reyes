import { Component, input, inject, computed } from '@angular/core';
import { FormUtils } from '../../../../utils/form-utils';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'validation-feedback',
  imports: [],
  templateUrl: './validation-feedback.html',
  styleUrl: './validation-feedback.css',
})
export class ValidationFeedback {
  formUtils = FormUtils
  private translate = inject(TranslateService);


  triggerControls = input.required<AbstractControl[]>();
  messageSources = input.required<AbstractControl[]>();
  logicMode = input<'OR' | 'AND'>('OR');

  get lang(): string {
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'es';
  }


  get hasErrors(){
    const controls = this.triggerControls();
    const isInvalid = (ctrl: AbstractControl) => this.formUtils.isInvalidField(ctrl);

    return this.logicMode() === 'OR'
      ? controls.some(isInvalid)  // Al menos uno falla
      : controls.every(isInvalid); // Todos deben fallar
  };

  get errorMessage(): string {
    for (const ctrl of this.messageSources()) {
      const msg = this.formUtils.getErrorMessage(ctrl, this.lang);
      if (msg) return msg;
    }
    return '';
  }
  get wasTouched(): boolean {
  const controls = this.triggerControls();
    const touched = controls.some(ctrl => ctrl.touched);
  
  return touched;
}


}
