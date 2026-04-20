import { Injectable } from '@angular/core';

@Injectable()
export class ReservationStateService {
  private readonly STORAGE_KEY = 'booking_wizard_data';

  private stepsData: Record<number, any> = {};

  constructor() {
    this.loadFromStorage();
  }
  private loadFromStorage(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.stepsData = JSON.parse(saved);
      } catch (e) {
        console.error('Error cargando datos del almacenamiento local', e);
        this.stepsData = {};
      }
    }
  }
  saveStep(stepNumber: number, data: any) {
    this.stepsData[stepNumber] = data;
    this.syncStorage();
  }

  getStep(stepNumber: number) {
    return this.stepsData[stepNumber];
  }

  getAllData() {
    return this.stepsData;
  }

  private syncStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stepsData));
  }

  // ¡Importante! Limpiar al finalizar la reserva
  clearData(): void {
    this.stepsData = {};
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
