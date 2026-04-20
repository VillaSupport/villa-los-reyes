import { Component, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'steps-card',
  imports: [TranslatePipe],
  templateUrl: './steps-card.html',
  styleUrl: './steps-card.css',
})
export class StepsCard {
  step = input.required<number>();
  maxStep = input.required<number>();
  stepChange = output<number>();

  // Inyectamos el observador de breakpoints
  private breakpointObserver = inject(BreakpointObserver);

  // Definimos cuándo "dejan de caber". Por ejemplo, debajo de 800px.
  // toSignal convierte el observable en una señal para usarlo fácil en el template
  isMobile = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 850px)'])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  isDropdownOpen = signal(false);

  steps = [
    {
      id: 0,
      step: 1,
      title: 'STEPS.STEP_1.TITLE',
      desc: 'STEPS.STEP_1.DESCRIPTION',
    },
    {
      id: 1,
      step: 2,
      title: 'STEPS.STEP_2.TITLE',
      desc: 'STEPS.STEP_2.DESCRIPTION',
    },
    {
      id: 2,
      step: 3,
      title: 'STEPS.STEP_3.TITLE',
      desc: 'STEPS.STEP_3.DESCRIPTION',
    },
  ];

  goToStep(id: number) {
    this.stepChange.emit(id);
  }

  get currentStepInfo() {
    return this.steps.find((s) => s.id === this.step()) || this.steps[0];
  }

  toggleDropdown() {
    if (this.isMobile()) {
      this.isDropdownOpen.update((v) => !v);
    }
  }

  onDropdownChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.goToStep(Number(val));
  }
}
