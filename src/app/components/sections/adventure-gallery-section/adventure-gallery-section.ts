import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'adventure-gallery-section',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './adventure-gallery-section.html',
  styleUrl: './adventure-gallery-section.css'
})
export class AdventureGallerySection {
  title = input.required<string>();   
  items = input.required<{ src: string; label: string; path: string }[]>();
}

