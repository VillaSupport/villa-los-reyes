// stay-step.ts
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormEffects } from '../../../../utils/form-effects';
import { ReservationStateService } from '../../../../services/reservation-state-service';
import { FormUtils } from '../../../../utils/form-utils';
import { TranslateService } from '@ngx-translate/core';
import { ValidationFeedback } from "../contact-step/validation-feedback/validation-feedback";
import { RoomNavigatorComponent } from "../../../shared/room-navigator/room-navigator";
import { FormDebug } from '../../../shared/form-debug/form-debug';
import { CustomValidators } from '../../../../utils/custom-validators';

@Component({
  selector: 'stay-step',
  templateUrl: './stay-step.html',
  styleUrls: ['./stay-step.css'],
  imports: [ReactiveFormsModule, ValidationFeedback]
})
export class StayStep {

  private state = inject(ReservationStateService);

  stepNumber = input.required<number>();
  packageDays = input<number>(3);
  next = output<void>();
  prev = output<void>();

  formUtils = FormUtils;

  public checkInControl = new FormControl('', [Validators.required, CustomValidators.isPastDate()]);
  public checkOutControl = new FormControl({ value: '', disabled: true }, [Validators.required]);

  public dateGroup = new FormGroup({
    checkIn: this.checkInControl,
    checkOut: this.checkOutControl
  }, { validators: [CustomValidators.dateRangeValidator(this.checkInControl, this.checkOutControl)] });

  private adultsControl = new FormControl(1, [Validators.required, Validators.min(1)]);
  private childrenControl = new FormControl(0, [Validators.min(0)]);

  public stayForm = new FormGroup({
    dates: this.dateGroup,
    adults: this.adultsControl,
    children: this.childrenControl
  });


  ngOnInit(): void {
    FormEffects.syncDateRange(this.checkInControl, this.checkOutControl, this.packageDays())

    const savedData = this.state.getStep(this.stepNumber());

    if (savedData) {
      this.stayForm.patchValue(savedData);
    }
  }

 
  onNextStep() {
    if (this.stayForm.valid) {
      this.state.saveStep(this.stepNumber(), this.stayForm.value);
      this.next.emit(); // Avisamos al padre
    } else {
      this.stayForm.markAllAsTouched();
    }
  }

  onGoBack() {
    this.prev.emit();
  }


  get adults(): number {
    return this.adultsControl.value ?? 0;
  }

  get children(): number {
    return this.childrenControl.value ?? 0;
  }

  // ======= Contadores =======
  private changeCounter(control: FormControl, delta: number): void {
    const newValue = control.value + delta;
    if (newValue >= 0) control.setValue(newValue);
  }

  increaseAdult(): void { this.changeCounter(this.adultsControl, 1); }
  decreaseAdult(): void { this.changeCounter(this.adultsControl, -1); }

  increaseChild(): void { this.changeCounter(this.childrenControl, 1); }
  decreaseChild(): void { this.changeCounter(this.childrenControl, -1); }

}
