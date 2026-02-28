import { Component, input, signal } from '@angular/core';

export interface HeaderText {
  title: string;
  description: string;
}

export interface HeaderImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'page-header',
  templateUrl: './page-header.html',
  styleUrls: ['./page-header.css'],
  imports: []
})
export class PageHeader {

  head = input<HeaderText>();
  image = input<HeaderImage>();
  reserveSpace = input<boolean>(true);

  isLoaded = signal(false);

  onImageLoad() {
    this.isLoaded.set(true);
  }
}

// main-header-section
