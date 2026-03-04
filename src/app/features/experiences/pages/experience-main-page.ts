import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOverviewTemplate, FeatureTemplateItem } from "../../../shared/templates/feature-overview-template/feature-overview-template";
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperiencesService } from '../services/experience.service';
import { FeatureItem, mapToFeatureTemplateItem } from '../../../shared/interfaces/feature-overview.interface';
import { PackageCrossList } from "../../packages/components/package-cross-list/package-cross-list";
import { ServiceCrossList } from "../../services-facilities/components/service-cross-list/service-cross-list";
import { HeaderData } from '../../../shared/interfaces/common.interface';

@Component({
    selector: 'experiences-main',
    standalone: true,
    imports: [CommonModule, FeatureOverviewTemplate, PackageCrossList, ServiceCrossList],
    template: `
    <feature-overview-template 
      [header]="header" 
      [items]="items()" [featureSlug]="'NewExperiences'">
      <package-cross-list packages />
      <service-cross-list crossSelling />
    </feature-overview-template>
  `
})
export class ExperiencesMainPage {
    private experiencesService = inject(ExperiencesService);

    readonly header:HeaderData = {
        title: 'HEADER.EXPERIENCES.TITLE',
        description: 'HEADER.EXPERIENCES.DESCRIPTION',
        img:{
            src: '/assets/imgs/headers/experiences/experiences-header.webp',
            alt: 'HEADER.EXPERIENCES.ALT'
        }
    }; 


    private experiencesData = toSignal(this.experiencesService.getExperiences(), {
        initialValue: [] as FeatureItem[]
    });

    items = computed<FeatureTemplateItem[]>(() =>
        this.experiencesData()?.map(item => mapToFeatureTemplateItem(item)) ?? []
    );
}