import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AutoImgDirective } from '../../../../../auto-img.directive';

@Component({
  selector: 'service-item',
  templateUrl: './service-item.html',
  styleUrl: './service-item.css',
  imports:[TranslatePipe,AutoImgDirective]
})
export class ServiceItem {
  service = input.required<{ title: string; src: string; alt: string }>();
}
