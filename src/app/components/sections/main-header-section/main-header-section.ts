import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Position } from '../../shared/interfaces/app-interfaces';
import { AutoImgDirective } from '../../../auto-img.directive';


@Component({
  selector: 'main-header-section',
  templateUrl: './main-header-section.html',
  styleUrls: ['./main-header-section.css'],
  imports:[TranslatePipe,AutoImgDirective]
})
export class MainHeaderSection {
  head = input.required<{ title: string; description: string }>();
  image = input<{ src: string; alt: string }>();
  objectPosition = input<Position>("center");
}

// main-header-section
