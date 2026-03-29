import { Component } from '@angular/core';
import { rooms as roomData } from './../../config/room-data';

import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { CarouselSection } from "../../features/home/components/carousel-section/carousel-section";
import { DiscoverExperienceSection } from "../../components/sections/discover-experiences-section/discover-experience-section";
import { DiscoverRoomSection } from "../../components/sections/discover-room-section/discover-room-section";
import { DiscoverServicesDefault } from "../../presets/discover-services-default/discover-services-default";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";

@Component({
  selector: 'home-page',
  imports: [
    GalleryInfoSection,
    CarouselSection,
    DiscoverExperienceSection,
    DiscoverRoomSection,
    DiscoverServicesDefault,
    DiscoverPackageDefaultOne
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  // =====================================
  // 1. CAROUSEL
  // =====================================
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

  // =====================================
  // 2. GALLERY INFO
  // =====================================
  galleryInfo = {
    mainImage: {
      src: 'assets/images/gallery/slide-terrace.jpg',
      alt: 'images.aboutSection.mainAlt'
    },
    thumbImages: [
      { src: 'assets/images/gallery/slide-room.jpg', alt: 'images.aboutSection.thumb1Alt' },
      { src: 'assets/images/gallery/slide-restaurant.jpg', alt: 'images.aboutSection.thumb2Alt' },
      { src: 'assets/images/gallery/slide-solar-panels.jpg', alt: 'images.aboutSection.thumb3Alt' }
    ],
    title: 'about.info.title',
    description: 'about.info.description',
    link: { text: 'about.info.button', url: '/about' },
    hasHostBg: false,
  };

  // =====================================
  // 3. EXPERIENCES
  // =====================================
  experienceHeader = {
    title: 'SECTION_HEADER.EXPERIENCES.TITLE',
    description: 'SECTION_HEADER.EXPERIENCES.DESCRIPTION',
    link: { label: 'SECTION_HEADER.EXPERIENCES.LINK_TEXT', route: '/experiences' }
  };

  experienceImages = [
    {
      src: '/assets/images/adventures/slide-horse-riding-01.jpg',
      alt: 'experiences.items.cabalgatas.alt',
      title: 'experiences.items.cabalgatas.title',
      link: '/experiences/horseback-riding'
    },
    {
      src: '/assets/images/adventures/slide-hiking.jpg',
      alt: 'experiences.items.senderismo.alt',
      title: 'experiences.items.senderismo.title',
      link: '/experiences/hiking'
    },
    {
      src: '/assets/images/adventures/slide-cycling.jpg',
      alt: 'experiences.items.ciclotours.alt',
      title: 'experiences.items.ciclotours.title',
      link: '/experiences/cycle-tours'
    },
    {
      src: '/assets/images/adventures/slide-beach-01.jpg',
      alt: 'experiences.items.otras.alt',
      title: 'experiences.items.otras.title',
      link: '/experiences/other'
    }
  ];

  // =====================================
  // 4. ROOMS
  // =====================================
  rooms = roomData;

  roomsInfo = {
    title: 'rooms.info.title',
    description: 'rooms.info.description',
    link: { text: 'rooms.info.button', url: '/services-facilities/facilities' }
  };

}
