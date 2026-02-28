import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'service-item',
  templateUrl: './service-item.html',
  styleUrl: './service-item.css',
  imports:[TranslatePipe]
})
export class ServiceItem {
  service = input.required<{ title: string; src: string; alt: string }>();
}
