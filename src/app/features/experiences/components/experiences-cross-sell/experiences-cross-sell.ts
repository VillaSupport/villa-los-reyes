import { Component, computed, inject, input } from '@angular/core';
import { GridLayout } from '../../../../shared/components/grid-layout/grid-layout';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import {
  ExperienceCardData,
  mapFeatureToExperience,
} from '../../interfaces/experience.interfaces';
import { ExperienceCard } from '../experience-card/experience-card';
import { DiscoveryHeader } from '../../../../shared/components/discovery-header/discovery-header';
import { ExperiencesService } from '../../services/experience.service';
import { FeatureItem } from '../../../../shared/interfaces/feature-overview.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'experiences-cross-sell',
  imports: [GridLayout, ExperienceCard, DiscoveryHeader],
  templateUrl: './experiences-cross-sell.html',
  styleUrl: './experiences-cross-sell.css',
})
export class ExperiencesCrossSell {
  experienceService = inject(ExperiencesService);

  readonly header: HeaderData = {
    title: 'SECTION_HEADER.EXPERIENCES.TITLE',
    description: 'SECTION_HEADER.EXPERIENCES.DESCRIPTION',
    link: { label: 'SECTION_HEADER.EXPERIENCES.LINK_TEXT', route: '/experiences' }

    
  };

  private rawFeatures = toSignal(this.experienceService.getExperiences(), {
    initialValue: [] as FeatureItem[],
  });

  readonly experienceCards = computed(() =>
    (this.rawFeatures() ?? []).map((item) => mapFeatureToExperience(item)),
  );
}
