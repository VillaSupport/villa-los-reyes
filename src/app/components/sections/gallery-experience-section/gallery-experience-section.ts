import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'gallery-experience-section',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './gallery-experience-section.html',
  styleUrl: './gallery-experience-section.css'
})
export class GalleryExperienceSection {

  images = input.required<{ src: string; title: string; path: string }[]>();
  title = input.required<string>();

}

