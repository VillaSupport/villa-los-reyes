import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'room-navigator',
  standalone: true,
  imports: [],
  templateUrl: './room-navigator.html',
  styleUrl: './room-navigator.css',
})
export class RoomNavigatorComponent {
// 1. Definir los nombres exactos que usas en el padre
  @Output() onPrev = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();

  // 2. Estos métodos deben ser llamados desde el HTML del hijo
  handlePrev() {
    this.onPrev.emit();
  }

  handleNext() {
    this.onNext.emit();
  }
}
