import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'section-nav',
  imports: [TranslatePipe],
  templateUrl: './section-nav.html',
  styleUrl: './section-nav.css',
})
export class SectionNav {
  prevDisabled = input<boolean>(false);
  nextDisabled = input<boolean>(false);

  onPrev = output<void>();
  onNext = output<void>()

  handlePrev() {
    console.log('handlePrev ejecutado, emitiendo onNext...');
    if (!this.prevDisabled()) this.onPrev.emit();
  }

  handleNext() {
    console.log('handleNext ejecutado, emitiendo onNext...');
    if (!this.nextDisabled()) this.onNext.emit();
  }
}

