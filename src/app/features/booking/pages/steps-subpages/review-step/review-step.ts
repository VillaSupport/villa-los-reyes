import { Component, inject, input, output, signal } from '@angular/core';
import { ReservationStateService } from '../../../services/reservation-state-service';
import { PackageService } from '../../../../packages/services/package.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment.development';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DatePipe } from '@angular/common';
import { finalize } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

export interface BookingData {
  firstName: string;
  lastName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  email: string;
  phone: string;
}
export type BookingResult = { success: boolean; error?: any };
@Component({
  selector: 'review-step',
  standalone: true,
  imports: [DatePipe,TranslatePipe],
  templateUrl: './review-step.html',
  styleUrl: './review-step.css',
})
export class ReviewStep {
  private packageService = inject(PackageService);
  private state = inject(ReservationStateService);
  private http = inject(HttpClient);
  slug = input.required<string>();

  stepNumber = input.required<number>();
  public isLoading = signal(false);

  next = output<BookingResult>();
  prev = output<void>();

  private packageData$ = toObservable(this.slug).pipe(
    switchMap((slugValue) => this.packageService.getPackageBySlug(slugValue)),
  );
  public selectedPackage = toSignal(this.packageData$, { initialValue: null });

  get bookingData(): BookingData {
    // Paso 0: StayStep (Contiene dates: {checkIn, checkOut}, adults, children)
    const stayData = this.state.getStep(0) || {};
    // Paso 1: ContactStep (Contiene name, lastName, email, phoneData: {dialCode, phoneNumber})
    const contactData = this.state.getStep(1) || {};

    return {
      firstName: contactData.name || '',
      lastName: contactData.lastName || '',
      email: contactData.email || '',
      phone: contactData.phoneData
        ? `${contactData.phoneData.dialCode} ${contactData.phoneData.phoneNumber}`
        : '',
      checkIn: stayData.dates?.checkIn || '',
      checkOut: stayData.dates?.checkOut || '',
      adults: stayData.adults || 0,
      children: stayData.children || 0,
    };
  }

  onNextStep() {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    const { base, type, key, suffix } = environment.googleScript;
    const url = `${base}${type}${key}${suffix}`;

    console.log('Procesando reserva...');

    this.http
      .post(url, JSON.stringify(this.bookingData))
      .pipe(
        finalize(() => this.isLoading.set(false)), // Se ejecuta siempre, sea error o éxito
      )
      .subscribe({
        next: (response) => {
          console.log('Reserva confirmada:', response);
          this.next.emit({ success: true });
        },
        error: (error) => {
          // Manejo específico para Google Apps Script y CORS
          if (error.status === 0 || error.status === 200) {
            console.warn(
              'Posible bloqueo de CORS, pero el script suele ejecutarse.',
            );
            this.next.emit({ success: true });
          } else {
            console.error('Error real en la petición:', error);
            this.next.emit({ success: false, error });
          }
        },
      });
  }
  onGoBack() {
    this.prev.emit();
  }
}
