import { Component, input } from '@angular/core';
import { GalleryExperienceSection } from "../../sections/gallery-experience-section/gallery-experience-section";
import { DiscoverPackageDefaultTwo } from "../../../presets/discover-package-default-two/discover-package-default-two";
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";
import { Position } from '../../shared/interfaces/app-interfaces';
import { PageHeader } from "../../../shared/components/page-header/page-header";

@Component({
  selector: 'experience-base-page',
  imports: [GalleryExperienceSection, DiscoverPackageDefaultTwo, DiscoverServicesDefault, PageHeader],
  templateUrl: './experience-base-page.html',
  styleUrl: './experience-base-page.css'
})
export class ExperienceBasePage {
  header = input.required<{
    head: { title: string; description: string };
    image: { src: string; alt: string };
    objectPosition: Position;
  }>();

  // Input para las imágenes de la galería
  title = input.required<string>();
  images = input.required<{ src: string; title: string,path:string }[]>();
}
