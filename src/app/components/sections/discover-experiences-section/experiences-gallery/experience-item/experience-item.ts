import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AutoImgDirective } from '../../../../../auto-img.directive';

@Component({
  selector: 'experience-item',
  imports: [TranslatePipe,AutoImgDirective],
  templateUrl: './experience-item.html',
  styleUrls: ['./experience-item.css']
})
export class ExperienceItemComponent {
  src = input.required<string>();
  alt = input.required<string>();
  title = input.required<string>();
}


