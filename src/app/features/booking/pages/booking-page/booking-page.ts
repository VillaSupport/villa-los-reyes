import { isPlatformBrowser, JsonPipe } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { StepsCard } from '../../components/steps-card/steps-card';
import { StayStep } from '../steps-subpages/stay-step/stay-step';
import { ContactStep } from '../steps-subpages/contact-step/contact-step';
import { ReviewStep } from '../steps-subpages/review-step/review-step';
import { RequestStep } from '../steps-subpages/request-step/request-step';
import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js';
import { CustomValidators } from '../../../../utils/custom-validators';
import { FormEffects } from '../../../../utils/form-effects';
import parsePhoneNumber from 'libphonenumber-js';
import { ReservationStateService } from '../../services/reservation-state-service';

@Component({
  selector: 'booking-page',
  templateUrl: './booking-page.html',
  styleUrls: ['./booking-page.css'],
  imports: [
    ReactiveFormsModule, // ⬅️ para formGroup, formControlName
    StepsCard,
    StayStep,
    ContactStep,
    ReviewStep,
    RequestStep,
  ],
  providers: [ReservationStateService],
})
export class BookingPage {
  @ViewChild('topScrollAnchor') topScrollAnchor!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  private readonly stateService = inject(ReservationStateService);
  slug = input.required<string>();
  private readonly storageKey = computed(() => `booking_step_${this.slug()}`);

  currentStep = signal(0);
  maxStepReached = signal(0);
  public bookingError = signal(false);

  ngOnInit(): void {
    // 1. Intentar recuperar el paso guardado al cargar el componente
    const savedStep = localStorage.getItem(this.storageKey());
    if (savedStep) {
      this.currentStep.set(Number(savedStep));
      this.maxStepReached.set(this.currentStep());
    }
  }

  nextStep(): void {
    if (this.currentStep() < 4) {
      this.currentStep.update((value) => value + 1);
      if (this.currentStep() > this.maxStepReached()) {
        this.maxStepReached.set(this.currentStep());
      }
      this.saveProgress();
    }
  }

  previousStep(): void {
    if (this.currentStep() > 0) {
      this.currentStep.update((value) => value - 1);
      this.saveProgress();
    }
  }

  goToStep(step: number): void {
    // REGLA: Puedes ir a cualquier paso menor o igual al máximo que ya visitaste
    if (step >= 0 && step <= this.maxStepReached()) {
      this.currentStep.set(step);
      this.saveProgress();
    }
  }
  handleBookingResult(result: { success: boolean; error?: any }) {
    // 1. Procesando el estado
    if (result.success) {
      this.bookingError.set(false);
    } else {
      this.bookingError.set(true);
      console.error('Detalles del fallo en reserva:', result.error);
    }

    // 2. Avanzamos al paso final
    this.nextStep();

    // 3. Gestión del scroll segura para SSR
    if (isPlatformBrowser(this.platformId)) {
      // Usamos un pequeño timeout para que Angular termine de renderizar el paso 3
      setTimeout(() => {
        if (this.topScrollAnchor?.nativeElement) {
          this.topScrollAnchor.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }

  private saveProgress(): void {
    // 2. Guardar el paso actual en localStorage
    localStorage.setItem(this.storageKey(), this.currentStep().toString());
  }

  // Opcional: Limpiar el progreso cuando la reserva se complete con éxito
  resetProgress(): void {
    // this.currentStep.set(0);
    // this.maxStepReached.set(0);
    // this.bookingError.set(false);

    localStorage.removeItem(this.storageKey());
    this.stateService.clearData();
  }
}
