import { Component, input } from '@angular/core';
import { ImgData } from '../../../../shared/interfaces/common.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'experience-card',
  imports: [RouterLink],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {

  
  image = input.required<ImgData>();
  title = input.required<string>();
  route = input<string>();

}

