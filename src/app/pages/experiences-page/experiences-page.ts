import { Component } from '@angular/core';
import { SplitGallerySection } from "../../components/sections/split-gallery-section/split-gallery-section";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../presets/discover-services-default/discover-services-default";
import { HexColor } from '../../components/shared/interfaces/app-interfaces';
import { PageHeader } from "../../shared/components/page-header/page-header";
import { HeaderData } from '../../shared/interfaces/common.interface';

interface ImageWithData {
  src: string;
  alt: string;  // aquí será la key del JSON
  name?: string; // aquí será la key del JSON
  details?: string;
  path?: string;
}

interface SectionInfo {
  title: string;       // key JSON
  description: string; // key JSON
  link: { text: string; url: string }; // text será key JSON, url sigue estático
}

export const experienceHeaderData: HeaderData = {
  title: 'HEADER.EXPERIENCES.TITLE',
  description: 'HEADER.EXPERIENCES.DESCRIPTION',
  img: {
    src: '/assets/images/experiences/experiences-header.jpg',
    alt: 'HEADER.EXPERIENCES.ALT'
  }
}

@Component({
  selector: 'experiences',
  imports: [SplitGallerySection, DiscoverPackageDefaultOne, DiscoverServicesDefault, PageHeader],
  templateUrl: './experiences-page.html',
  styleUrl: './experiences-page.css'
})
export class ExperiencesPage {

  readonly header = experienceHeaderData;

  gallerySections: {
    leftImage: ImageWithData;
    info: SectionInfo;
    rightImages: ImageWithData[];
    color: HexColor;
    reverse?: boolean;
    hasHostBg?: boolean;
  }[] = [
      {
        leftImage: { src: '/assets/images/adventures/slide-horse-riding-01.jpg', alt: 'experiencesContent.gallerySections.0.leftImageAlt', name: 'experiencesContent.gallerySections.0.leftImageName' },
        info: {
          title: 'experiencesContent.gallerySections.0.infoTitle',
          description: 'experiencesContent.gallerySections.0.infoDescription',
          link: { text: 'experiencesContent.gallerySections.0.linkText', url: '/experiences/horseback-riding' }
        },
        rightImages: [
          { src: '/assets/images/adventures/slide-horse-riding-02.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.0.alt', name: 'experiencesContent.gallerySections.0.rightImages.0.name', path: '/experiences/horseback-riding/mountain' },
          { src: '/assets/images/adventures/slide-horse-riding-03.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.1.alt', name: 'experiencesContent.gallerySections.0.rightImages.1.name', path: '/experiences/horseback-riding/fascinating-landscape' },
          { src: '/assets/images/adventures/slide-horse-riding-04.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.2.alt', name: 'experiencesContent.gallerySections.0.rightImages.2.name', path: '/experiences/horseback-riding/sunset' }
        ],
        color: '#f7faf7',
        hasHostBg: false
      },
      {
        leftImage: { src: '/assets/images/adventures/slide-hiking.jpg', alt: 'experiencesContent.gallerySections.1.leftImageAlt', name: 'experiencesContent.gallerySections.1.leftImageName' },
        info: {
          title: 'experiencesContent.gallerySections.1.infoTitle',
          description: 'experiencesContent.gallerySections.1.infoDescription',
          link: { text: 'experiencesContent.gallerySections.1.linkText', url: '/experiences/hiking' }
        },
        rightImages: [
          { src: '/assets/images/adventures/slide-hell-to-paradise.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.0.alt', name: 'experiencesContent.gallerySections.1.rightImages.0.name', path: '/experiences/hiking/from-hell-to-paradise' },
          { src: '/assets/images/adventures/slide-amazing-sunrise.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.1.alt', name: 'experiencesContent.gallerySections.1.rightImages.1.name', path: '/experiences/hiking/amazing-sunrise' },
          { src: '/assets/images/adventures/slide-tobacco-inside.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.2.alt', name: 'experiencesContent.gallerySections.1.rightImages.2.name', path: '/experiences/hiking/tobacco-inside' }
        ],
        color: '#E4EAE5',
        reverse: true
      },
      {
        leftImage: { src: '/assets/images/adventures/slide-cycling.jpg', alt: 'experiencesContent.gallerySections.2.leftImageAlt', name: 'experiencesContent.gallerySections.2.leftImageName' },
        info: {
          title: 'experiencesContent.gallerySections.2.infoTitle',
          description: 'experiencesContent.gallerySections.2.infoDescription',
          link: { text: 'experiencesContent.gallerySections.2.linkText', url: '/experiences/cycle-tours' }
        },
        rightImages: [
          { src: '/assets/images/adventures/slide-the-calvary.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.0.alt', name: 'experiencesContent.gallerySections.2.rightImages.0.name', path: '/experiences/cycle-tours/the-calvary' },
          { src: '/assets/images/adventures/slide-the-slippery-one.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.1.alt', name: 'experiencesContent.gallerySections.2.rightImages.1.name', path: '/experiences/cycle-tours/the-slippery-one' },
          { src: '/assets/images/adventures/slide-through-the-valleys.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.2.alt', name: 'experiencesContent.gallerySections.2.rightImages.2.name', path: '/experiences/cycle-tours/through-the-valleys' }
        ],
        color: '#f7faf7'
      },
      {
        leftImage: { src: '/assets/images/adventures/slide-beach-01.jpg', alt: 'experiencesContent.gallerySections.3.leftImageAlt', name: 'experiencesContent.gallerySections.3.leftImageName' },
        info: {
          title: 'experiencesContent.gallerySections.3.infoTitle',
          description: 'experiencesContent.gallerySections.3.infoDescription',
          link: { text: 'experiencesContent.gallerySections.3.linkText', url: '/experiences/other' }
        },
        rightImages: [
          { src: '/assets/images/adventures/slide-paradise-beach.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.0.alt', name: 'experiencesContent.gallerySections.3.rightImages.0.name', path: '/experiences/other/paradise-beach' },
          { src: '/assets/images/adventures/slide-intense-day.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.1.alt', name: 'experiencesContent.gallerySections.3.rightImages.1.name', path: '/experiences/other/intense-day' },
          { src: '/assets/images/adventures/slide-vinales-day-trip.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.2.alt', name: 'experiencesContent.gallerySections.3.rightImages.2.name', path: '/experiences/other/vinales-day-trip' }
        ],
        color: '#E4EAE5',
        reverse: true
      }
    ];
}
