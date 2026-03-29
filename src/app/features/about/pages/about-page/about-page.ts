import { Component, effect, inject } from '@angular/core';
import { GallerySplitView } from '../../../../shared/components/gallery-split-view/gallery-split-view';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { SplitView } from '../../../../shared/components/split-view/split-view';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { AboutService } from '../../services/about.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AboutView } from '../../components/about-view/about-view';

@Component({
  selector: 'about-page',
  imports: [PageHeader, SplitView,AboutView],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  aboutService = inject(AboutService);
  readonly headerData: HeaderData = {
    title: 'HEADER.ABOUT.TITLE',
    description: 'HEADER.ABOUT.DESCRIPTION',
    img: {
      src: 'assets/imgs/shared/villa-los-reyes-facade-garden.webp',
      alt: 'HEADER.ABOUT.ALT',
    },
  };


  aboutData = toSignal(
    this.aboutService.getAboutData(),
    { initialValue: [] },
  );
}
