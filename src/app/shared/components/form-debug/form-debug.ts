import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-debug',
  imports: [JsonPipe],
  templateUrl: './form-debug.html',
  styleUrl: './form-debug.css',
})
export class FormDebug {

  formGroup = input.required<AbstractControl>();


  get allControls() {
    let controls: { name: string, ctrl: AbstractControl }[] = [];

    const recursiveExtract = (name: string, control: AbstractControl) => {
      const label = control instanceof FormGroup ? '[FormGroup]' : control instanceof FormArray ? '[FormArray]' : '[FormControl]'

      if (control instanceof FormGroup || control instanceof FormArray) {

        controls.push({ name: `${label}:${name}`, ctrl: control })
        Object.entries(control.controls).forEach(([key, childControl]) => {
          recursiveExtract(key, childControl);
        });
      }
      else { controls.push({ name: `${label}:${name}`, ctrl: control }) }
    };

    recursiveExtract('FormRoot', this.formGroup());
    return controls;
  }
  formatErrors(errors: any) {
    return errors ? JSON.stringify(errors, null, 2) : 'null';
  }
}
