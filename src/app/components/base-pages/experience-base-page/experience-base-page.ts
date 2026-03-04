import { Component, computed, input } from '@angular/core';
import { GalleryExperienceSection } from "../../sections/gallery-experience-section/gallery-experience-section";
import { DiscoverPackageDefaultTwo } from "../../../presets/discover-package-default-two/discover-package-default-two";
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";
import { Position } from '../../shared/interfaces/app-interfaces';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { HeaderData } from '../../../shared/interfaces/common.interface';
import { HeaderDataDeprecated } from '../room-base-page/room-base-page';

export const mapToHeaderData = (data:HeaderDataDeprecated):HeaderData => {
  return {...data.head,img:data.image}
} 


@Component({
  selector: 'experience-base-page',
  imports: [GalleryExperienceSection, DiscoverPackageDefaultTwo, DiscoverServicesDefault, PageHeader],
  templateUrl: './experience-base-page.html',
  styleUrl: './experience-base-page.css'
})
export class ExperienceBasePage {
  headerDeprecated = input.required<HeaderDataDeprecated>();
  header = computed(() => mapToHeaderData(this.headerDeprecated()))
 
  // Input para las imágenes de la galería
  title = input.required<string>();
  images = input.required<{ src: string; title: string,path:string }[]>();
}
