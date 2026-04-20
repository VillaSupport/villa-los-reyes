import { Component, input } from '@angular/core';
import { ImgData, InfoData } from '../../interfaces/common.interface';
import { InfoBlock } from "../info-block/info-block";
import { GalleryThumbsGrid } from "../gallery-thumbs-grid/gallery-thumbs-grid";

@Component({
  selector: 'gallery-split-view',
  imports: [InfoBlock, GalleryThumbsGrid],
  templateUrl: './gallery-split-view.html',
  styleUrl: './gallery-split-view.css',
host: {
    '[class.is-overlapping]': 'overlap()', // Sincroniza la clase con la Signal
  }

})
export class GallerySplitView {

  mainImage = input.required<ImgData|undefined>();
  thumbImages = input<ImgData[]>();

  info = input.required<InfoData>();

  reverse = input<boolean>(false);
  whiteBg = input<boolean>(false);
  overlap = input<boolean>(false);
}

