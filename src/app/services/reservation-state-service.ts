import { Injectable } from '@angular/core';

@Injectable()
export class ReservationStateService {
  private stepsData: Record<number, any> = {};

  saveStep(stepNumber: number, data: any) {
    this.stepsData[stepNumber] = data;
  }

  getStep(stepNumber: number) {
    return this.stepsData[stepNumber];
  }

  getAllData() {
    return this.stepsData;
  }
  
}