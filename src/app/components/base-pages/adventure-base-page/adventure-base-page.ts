import { Position } from './../../shared/interfaces/app-interfaces';
import { Component, input } from '@angular/core';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { AdventureGallerySection } from "../../sections/adventure-gallery-section/adventure-gallery-section";
import { DiscoverPackageDefaultOne } from "../../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";

@Component({
  selector: 'adventure-base-page',
  imports: [MainHeaderSection, AdventureGallerySection, DiscoverPackageDefaultOne, DiscoverServicesDefault],
  templateUrl: './adventure-base-page.html',
  styleUrl: './adventure-base-page.css'
})
export class AdventureBasePage {
  header = input.required<{
    head: { title: string; description: string };
    image: { src: string; alt: string };
    objectPosition: Position;
  }>();

  title = input.required<string>();
  items = input.required<{ src: string; label: string; path: string }[]>();
}

