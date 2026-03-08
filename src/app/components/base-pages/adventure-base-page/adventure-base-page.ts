import { Position } from './../../shared/interfaces/app-interfaces';
import { Component, computed, input } from '@angular/core';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { AdventureGallerySection } from "../../sections/adventure-gallery-section/adventure-gallery-section";
import { DiscoverPackageDefaultOne } from "../../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";
import { HeaderDataDeprecated } from '../room-base-page/room-base-page';
import { mapToHeaderData } from '../experience-base-page/experience-base-page';


@Component({
  selector: 'adventure-base-page',
  imports: [AdventureGallerySection, DiscoverPackageDefaultOne, DiscoverServicesDefault, PageHeader],
  templateUrl: './adventure-base-page.html',
  styleUrl: './adventure-base-page.css'
})
export class AdventureBasePage {
  headerDeprecated = input.required<HeaderDataDeprecated>();

  header = computed(()=> mapToHeaderData(this.headerDeprecated()))

  title = input.required<string>();
  items = input.required<{ src: string; label: string; path: string }[]>();
}

