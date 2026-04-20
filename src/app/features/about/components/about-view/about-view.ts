import { Component, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AboutService } from '../../services/about.service';
import { GallerySplitView } from "../../../../shared/components/gallery-split-view/gallery-split-view";

@Component({
  selector: 'about-view',
  imports: [GallerySplitView],
  templateUrl: './about-view.html',
  styleUrl: './about-view.css',
})
export class AboutView {
  aboutService = inject(AboutService);

  public showNavigation = input<boolean>(true);
  
  aboutData = toSignal(
    this.aboutService.getSectionBySlug("about-villa"),
    { initialValue: undefined },
  );

}
