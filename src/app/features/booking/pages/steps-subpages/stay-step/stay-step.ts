// stay-step.ts
import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormEffects } from '../../../../../utils/form-effects';
import { ReservationStateService } from '../../../services/reservation-state-service';
import { FormUtils } from '../../../../../utils/form-utils';
import { ValidationFeedback } from '../../../components/validation-feedback/validation-feedback';
import { FormDebug } from '../../../../../shared/components/form-debug/form-debug';
import { CustomValidators } from '../../../../../utils/custom-validators';
import { PackageService } from '../../../../packages/services/package.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'stay-step',
  templateUrl: './stay-step.html',
  styleUrls: ['./stay-step.css'],
  imports: [ReactiveFormsModule, ValidationFeedback,TranslatePipe],
})
export class StayStep {
  private state = inject(ReservationStateService);
  private packageService = inject(PackageService);

  stepNumber = input.required<number>();
  slug = input.required<string>();

  next = output<void>();
  prev = output<void>();

  formUtils = FormUtils;

  // private selectedPackage = computed(() => {
  //   return this.packageService.getPackageBySlug(this.slug(), 'es');
  // });

  private packageData$ = toObservable(this.slug).pipe(
    switchMap((slugValue) => this.packageService.getPackageBySlug(slugValue)),
  );
  private selectedPackage = toSignal(this.packageData$, { initialValue: null });
  // 2. Extraemos los días del paquete encontrado
  public packageDays = computed(() => {
    const pkg = this.selectedPackage();
    if (!pkg || !pkg.duration) return undefined;

    const match = pkg.duration.match(/(\d+)\s*d/i);
    return match ? +match[1] : 1;
  });

  public checkInControl = new FormControl('', [
    Validators.required,
    CustomValidators.isPastDate(),
  ]);
  public checkOutControl = new FormControl({ value: '', disabled: true }, [
    Validators.required,
  ]);

  public dateGroup = new FormGroup(
    {
      checkIn: this.checkInControl,
      checkOut: this.checkOutControl,
    },
    {
      validators: [
        CustomValidators.dateRangeValidator(
          this.checkInControl,
          this.checkOutControl,
        ),
      ],
    },
  );

  private adultsControl = new FormControl(1, {
    nonNullable: true,
    validators: [Validators.required, Validators.min(1)],
  });
  private childrenControl = new FormControl(0, {
    nonNullable: true,
    validators: [Validators.min(0)],
  });

  public stayForm = new FormGroup({
    dates: this.dateGroup,
    adults: this.adultsControl,
    children: this.childrenControl,
  });

constructor() {
  effect(() => {
    const days = this.packageDays();
    console.log('Días del paquete:', days); // Debug para verificar el valor de 'days'
    console.log('Paquete seleccionado:', this.selectedPackage()); // Debug para verificar el valor de 'selectedPackage'

    
    // Si 'days' es 0, null o undefined, no hacemos nada
    if (days) { 
      FormEffects.syncDateRange(
        this.checkInControl,
        this.checkOutControl,
        days // Aquí TS ya sabe que es un 'number' seguro
      );
    }
  });
}

  ngOnInit(): void {
    const savedData = this.state.getStep(this.stepNumber());
    if (savedData) {
      this.stayForm.patchValue(savedData);
    }
  }

  onNextStep() {
    if (this.stayForm.valid) {
      this.state.saveStep(this.stepNumber(), this.stayForm.getRawValue());
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
  private updateCounter(control: FormControl<number>, delta: number): void {
    const newValue = control.value + delta;
    if (newValue >= 0) control.setValue(newValue);
  }

  increaseAdult(): void {
    this.updateCounter(this.adultsControl, 1);
  }
  decreaseAdult(): void {
    this.updateCounter(this.adultsControl, -1);
  }

  increaseChild(): void {
    this.updateCounter(this.childrenControl, 1);
  }
  decreaseChild(): void {
    this.updateCounter(this.childrenControl, -1);
  }
}
