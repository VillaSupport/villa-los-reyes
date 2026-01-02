// stay-step.ts
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'stay-step',
  templateUrl: './stay-step.html',
  styleUrls: ['./stay-step.css'],
  imports: [ReactiveFormsModule]
})
export class StayStep {

  form = input.required<FormGroup>();
 
  // ======= Contadores =======
  changeCounter(field: string, delta: number): void {
    const control = this.form().get(field);
    if (!control) return;

    const newValue = control.value + delta;
    if (newValue >= 0) control.setValue(newValue);
  }

  increaseAdult(): void { this.changeCounter('adults', 1); }
  decreaseAdult(): void { this.changeCounter('adults', -1); }

  increaseChild(): void { this.changeCounter('children', 1); }
  decreaseChild(): void { this.changeCounter('children', -1); }

  // ======= Getters para plantilla =======
  get adults(): number { return this.form().get('adults')?.value ?? -1; }
  get children(): number { return this.form().get('children')?.value ?? -1; }

}
