import { Component, input, signal } from '@angular/core';
import { HeaderData } from '../../interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'page-header',
  templateUrl: './page-header.html',
  styleUrls: ['./page-header.css'],
  imports: [TranslatePipe]
})
export class PageHeader {

  header = input<HeaderData>();

  reserveSpace = input<boolean>(true);

  isLoaded = signal(false);

  onImageLoad() {
    this.isLoaded.set(true);
  }
}

// main-header-section
