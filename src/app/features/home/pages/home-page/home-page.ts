import { Component } from '@angular/core';
import { ServiceCrossList } from "../../../services-facilities/components/service-cross-list/service-cross-list";
import { PackageCrossList } from "../../../packages/components/package-cross-list/package-cross-list";
import { ExperiencesCrossSell } from "../../../experiences/components/experiences-cross-sell/experiences-cross-sell";
import { CarouselSection } from '../../components/carousel-section/carousel-section';
import { AboutView } from "../../../about/components/about-view/about-view";
import { DiscoverRooms } from "../../../services-facilities/components/discover-room-section/discover-rooms";

@Component({
  selector: 'app-home-page',
  imports: [ServiceCrossList, PackageCrossList, ExperiencesCrossSell, CarouselSection, AboutView, DiscoverRooms],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

    carouselSlides = [
    {
      src: 'assets/images/carousel/slide-facade.jpg',
      altKey: 'CAROUSEL.SLIDE_1.ALT_TEXT',
      titleKey: 'CAROUSEL.SLIDE_1.HEADING',
      subtitleKey: 'CAROUSEL.SLIDE_1.DESCRIPTION'
    },
    {
      src: 'assets/images/carousel/slide-terrace.jpg',
      altKey: 'CAROUSEL.SLIDE_2.ALT_TEXT',
      titleKey: 'CAROUSEL.SLIDE_2.HEADING',
      subtitleKey: 'CAROUSEL.SLIDE_2.DESCRIPTION'
    },
    {
      src: 'assets/images/carousel/slide-solar.jpg',
      altKey: 'CAROUSEL.SLIDE_3.ALT_TEXT',
      titleKey: 'CAROUSEL.SLIDE_3.HEADING',
      subtitleKey: 'CAROUSEL.SLIDE_3.DESCRIPTION'
    },
    {
      src: 'assets/images/carousel/slide-room.jpg',
      altKey: 'CAROUSEL.SLIDE_4.ALT_TEXT',
      titleKey: 'CAROUSEL.SLIDE_4.HEADING',
      subtitleKey: 'CAROUSEL.SLIDE_4.DESCRIPTION'
    }
  ];
}
