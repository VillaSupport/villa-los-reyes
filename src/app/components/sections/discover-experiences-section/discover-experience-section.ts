import { Component, input } from '@angular/core';
import { ExperiencesGallery } from "./experiences-gallery/experiences-gallery";
import { SectionHeader } from "../../shared/section-header/section-header";
import { DiscoveryHeader } from "../../../shared/components/discovery-header/discovery-header";

@Component({
  selector: 'discover-experiences-section',
  imports: [ExperiencesGallery, DiscoveryHeader],
  templateUrl: './discover-experience-section.html',
  styleUrls: ['./discover-experience-section.css']
})
export class DiscoverExperienceSection {

  header = input.required<{ title: string, description: string, link: { text: string, url: string } }>()

  experienceImages = input.required<{ src: string, alt: string, title: string, link: string}[]>()

}
