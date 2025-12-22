import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'package-item',
  imports: [TranslatePipe],
  templateUrl: './package-item.html',
  styleUrl: './package-item.css'
})
export class PackageItem {
  image = input.required<string>();
  alt = input.required<string>();
  title = input.required<string>();
  duration = input.required<string>();
  description = input.required<string>();
  price = input.required<string>();
  perUnit = input.required<string>();

}
