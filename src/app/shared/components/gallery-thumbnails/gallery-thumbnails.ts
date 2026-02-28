import { Component, input } from '@angular/core';
import { ImgData } from '../../interfaces/common.interface';
@Component({
  selector: 'gallery-thumbnails',
  imports: [],
  templateUrl: './gallery-thumbnails.html',
  styleUrl: './gallery-thumbnails.css',
})
export class GalleryThumbnails {

  mainImage = input.required<ImgData>();
  thumbImages = input<ImgData[]>([]);
}
