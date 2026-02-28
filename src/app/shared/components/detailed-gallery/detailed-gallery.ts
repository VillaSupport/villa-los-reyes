import { Component, computed, HostBinding, input } from '@angular/core';
import { GalleryThumbnails } from "../gallery-thumbnails/gallery-thumbnails";
import { InfoBlock, InfoData } from "../info-block/info-block";
import { ImgData } from '../../interfaces/common.interface';

@Component({
  selector: 'detailed-gallery',
  imports: [GalleryThumbnails, InfoBlock],
  templateUrl: './detailed-gallery.html',
  styleUrl: './detailed-gallery.css',
  host: {
    '[class.is-overlapping]': 'overlap()', // Sincroniza la clase con la Signal
  }
})
export class DetailedGallery {

  images = input.required<ImgData[]>();
  info = input.required<InfoData>();

  reverse = input<boolean>(false);
  whiteBg = input<boolean>(false);
  overlap = input<boolean>(false);

  main = computed(() => this.images()[0]);
  thumbs = computed(() => this.images().slice(1));


}
