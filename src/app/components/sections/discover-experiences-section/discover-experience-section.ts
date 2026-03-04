import { Component, input } from '@angular/core';
import { ExperiencesGallery } from "./experiences-gallery/experiences-gallery";
import { DiscoveryHeader } from "../../../shared/components/discovery-header/discovery-header";
import { HeaderData } from '../../../shared/interfaces/common.interface';

@Component({
  selector: 'discover-experiences-section',
  imports: [ExperiencesGallery, DiscoveryHeader],
  templateUrl: './discover-experience-section.html',
  styleUrls: ['./discover-experience-section.css']
})
export class DiscoverExperienceSection {
  header = input.required<HeaderData>()
  experienceImages = input.required<{ src: string, alt: string, title: string, link: string}[]>()
}
