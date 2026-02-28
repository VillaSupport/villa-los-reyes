import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skeleton-test.component',
  imports: [],
  templateUrl: './skeleton-test.component.html',
  styleUrl: './skeleton-test.component.css',
})
export class SkeletonTestComponent {
  // Estado para simular la carga
  isLoading = signal(true);

  toggleLoading() {
    this.isLoading.update(v => !v);
  }
}