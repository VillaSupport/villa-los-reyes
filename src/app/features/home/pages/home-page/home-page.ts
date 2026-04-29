import { Component } from '@angular/core';
import { ServiceCrossList } from "../../../services-facilities/components/service-cross-list/service-cross-list";
import { PackageCrossList } from "../../../packages/components/package-cross-list/package-cross-list";
import { ExperiencesCrossSell } from "../../../experiences/components/experiences-cross-sell/experiences-cross-sell";
import { CarouselSection } from '../../components/carousel-section/carousel-section';
import { AboutView } from "../../../about/components/about-view/about-view";
import { DiscoverRooms } from "../../../services-facilities/components/discover-room-section/discover-rooms";
import { ReviewsCrossList } from "../../../reviews/components/reviews-cross-list/reviews-cross-list";

@Component({
  selector: 'app-home-page',
  imports: [ServiceCrossList, PackageCrossList, ExperiencesCrossSell, CarouselSection, AboutView, DiscoverRooms, ReviewsCrossList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

    slides = [
    {
      src: 'assets/imgs/outdoor/carousel/villa-los-reyes-facade-vinales.webp',
      alt: 'CAROUSEL.SLIDE_1.ALT_TEXT',
      title: 'CAROUSEL.SLIDE_1.HEADING',
      subtitle: 'CAROUSEL.SLIDE_1.DESCRIPTION'
    },
    {
      src: 'assets/imgs/outdoor/carousel/terrace-pool-mountain-view.webp',
      alt: 'CAROUSEL.SLIDE_2.ALT_TEXT',
      title: 'CAROUSEL.SLIDE_2.HEADING',
      subtitle: 'CAROUSEL.SLIDE_2.DESCRIPTION'
    },
    {
      src: 'assets/imgs/shared/solar-panels.webp',
      alt: 'CAROUSEL.SLIDE_3.ALT_TEXT',
      title: 'CAROUSEL.SLIDE_3.HEADING',
      subtitle: 'CAROUSEL.SLIDE_3.DESCRIPTION'
    },
    {
      src: 'assets/imgs/rooms/room-02/view-from-bed-to-patio.webp',
      alt: 'CAROUSEL.SLIDE_4.ALT_TEXT',
      title: 'CAROUSEL.SLIDE_4.HEADING',
      subtitle: 'CAROUSEL.SLIDE_4.DESCRIPTION'
    }
  ];
}
