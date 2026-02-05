import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { StepsCard } from "./steps-card/steps-card";
import { StayStep } from "./stay-step/stay-step";
import { ContactStep } from "./contact-step/contact-step";
import { ReviewStep } from "./review-step/review-step";
import { RequestStep } from "./request-step/request-step";
import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js';
import { CustomValidators } from '../../../utils/custom-validators';
import { FormEffects } from '../../../utils/form-effects';
import parsePhoneNumber from 'libphonenumber-js';
import { ReservationStateService } from '../../../services/reservation-state-service';

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
  ],
  providers:[ReservationStateService]
})
export class ReservationSection {

  currentStep = 1;

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}

