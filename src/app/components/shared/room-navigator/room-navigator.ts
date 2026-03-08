import { Component, EventEmitter, Output, Input, input } from '@angular/core';

@Component({
  selector: 'room-navigator',
  standalone: true,
  templateUrl: './room-navigator.html',
  styleUrl: './room-navigator.css',
})
export class RoomNavigatorComponent {
  // Inputs para recibir el estado desde el padre
  @Input() prevDisabled: boolean = false;
  @Input() nextDisabled: boolean = false;

  @Output() onPrev = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();

  handlePrev() {
    if (!this.prevDisabled) this.onPrev.emit();
  }

  handleNext() {
    if (!this.nextDisabled) this.onNext.emit();
  }
}
