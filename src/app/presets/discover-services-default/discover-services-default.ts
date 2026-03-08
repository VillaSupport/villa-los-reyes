import { Component } from '@angular/core';
import { DiscoverServicesSection } from '../../components/sections/discover-services-section/discover-services-section';
import { servicesContent } from '../../config/services-data';

@Component({
  selector: 'discover-services-default',
  imports: [DiscoverServicesSection],
  template: `
    <discover-services-section
      [header]="header"
      [services]="services"/>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class DiscoverServicesDefault {
  header = {
    title: 'discoverServices.header.title',
    description: 'discoverServices.header.description',
    link: { label: 'discoverServices.header.linkText', route: '/services-facilities' }
  };


  services = [
    {
      src: servicesContent.gastronomy.src,
      alt: servicesContent.gastronomy.alt,
      title: servicesContent.gastronomy.title,
      path: '/services-facilities/services',
      fragment: 'gastronomy'
    },
    {
      src: servicesContent.mobility.src,
      alt: servicesContent.mobility.alt,
      title: servicesContent.mobility.title,
      path: '/services-facilities/services',
      fragment: 'mobility'
    },
    {
      src: servicesContent.tripPlanner.src,
      alt: servicesContent.tripPlanner.alt,
      title: servicesContent.tripPlanner.title,
      path: '/services-facilities/services',
      fragment: 'tripPlanner'
    },
    {
      src: servicesContent.massages.src,
      alt: servicesContent.massages.alt,
      title: servicesContent.massages.title,
      path: '/services-facilities/services',
      fragment: 'massages'
    },
    {
      src: servicesContent.laundry.src,
      alt: servicesContent.laundry.alt,
      title: servicesContent.laundry.title,
      path: '/services-facilities/services',
      fragment: 'laundry'
    }
  ];
}


