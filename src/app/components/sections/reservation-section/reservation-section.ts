import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { StepsCard } from "./steps-card/steps-card";
import { StayStep } from "./stay-step/stay-step";
import { ContactStep } from "./contact-step/contact-step";
import { ReviewStep } from "./review-step/review-step";
import { RequestStep } from "./request-step/request-step";

@Component({
  selector: 'app-reservation-wizard',
  templateUrl: './reservation-section.html',
  styleUrls: ['./reservation-section.css'],
  imports: [
    ReactiveFormsModule // ⬅️ para formGroup, formControlName
    ,
    StepsCard,
    StayStep,
    ContactStep,
    ReviewStep,
    RequestStep
  ]
})
export class ReservationSection implements OnInit {

  currentStep = 1;
  packageDays = 5;

  stayForm!: FormGroup;
  form!: FormGroup;


  constructor(private fb: FormBuilder) {

    this.stayForm = this.fb.group({
      checkIn: ['', [Validators.required, this.notPastDate()]],
       checkOut: [{ value: '', disabled: true }, Validators.required],
      adults: [1, [Validators.required, Validators.min(1)]],
      children: [0, [Validators.min(0)]]
    }, { validators: this.checkOutAfterCheckIn() });



   }

  ngOnInit(): void {
    this.form = this.fb.group({
      guest: this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        country: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        notes: [''],
        acceptTerms: [false, Validators.requiredTrue]
      })
    });

     // Calcular checkOut automáticamente al cambiar checkIn
    this.stayForm.get('checkIn')?.valueChanges.subscribe(date => {
      if (date) this.autoCheckOut(date);
    });
  }

    // Check-in no puede ser fecha pasada
  notPastDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return new Date(value) >= today ? null : { pastDate: true };
    };
  }
  // Check-out debe ser mayor que check-in
  checkOutAfterCheckIn(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const inDate = group.get('checkIn')?.value;
      const outDate = group.get('checkOut')?.value;

      if (!inDate || !outDate) return null;

      return new Date(outDate) > new Date(inDate) ? null : { invalidRange: true };
    };
  }

  autoCheckOut(checkIn: string): void {
    const start = new Date(checkIn);
    start.setDate(start.getDate() + this.packageDays);

    const checkOutControl = this.stayForm.get('checkOut');
    if (checkOutControl) {
      checkOutControl.setValue(start.toISOString().split('T')[0]);
    }
  }


  isStepValid(): boolean {
    if (this.currentStep === 1) return this.stayForm.valid ?? false;
    if (this.currentStep === 2) return this.form.get('guest')?.valid ?? false;
    return true;
  }


  nextStep(): void {
    // 
    if (this.isStepValid()) {
      this.currentStep++;
    } else {
      this.form.markAllAsTouched();
    }
  }

  previousStep(): void {
    this.currentStep--;
  }


  submitReservation(): void {
    console.log(this.form.getRawValue());
    this.currentStep = 4;
  }
}

