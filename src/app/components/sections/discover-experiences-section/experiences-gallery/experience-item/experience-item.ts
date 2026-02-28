import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'experience-item',
  imports: [TranslatePipe],
  templateUrl: './experience-item.html',
  styleUrls: ['./experience-item.css']
})
export class ExperienceItemComponent {
  src = input.required<string>();
  alt = input.required<string>();
  title = input.required<string>();
}


