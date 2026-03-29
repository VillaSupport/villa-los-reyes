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
      altKey: 'carousel.slide1.alt',
      titleKey: 'carousel.slide1.title',
      subtitleKey: 'carousel.slide1.subtitle'
    },
    {
      src: 'assets/images/carousel/slide-terrace.jpg',
      altKey: 'carousel.slide2.alt',
      titleKey: 'carousel.slide2.title',
      subtitleKey: 'carousel.slide2.subtitle'
    },
    {
      src: 'assets/images/carousel/slide-solar.jpg',
      altKey: 'carousel.slide3.alt',
      titleKey: 'carousel.slide3.title',
      subtitleKey: 'carousel.slide3.subtitle'
    },
    {
      src: 'assets/images/carousel/slide-room.jpg',
      altKey: 'carousel.slide4.alt',
      titleKey: 'carousel.slide4.title',
      subtitleKey: 'carousel.slide4.subtitle'
    }
  ];
}
