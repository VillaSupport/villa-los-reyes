import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOverviewTemplate, FeatureTemplateItem } from "../../../shared/templates/feature-overview-template/feature-overview-template";
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperiencesService } from '../services/experience.service';
import { FeatureItem, mapToFeatureTemplateItem } from '../../../shared/interfaces/feature-overview.interface';

@Component({
    selector: 'experiences-main',
    standalone: true,
    imports: [CommonModule, FeatureOverviewTemplate],
    template: `
    <feature-overview-template 
      [header]="header" 
      [items]="items()" [featureSlug]="'NewExperiences'">
    </feature-overview-template>
  `
})
export class ExperiencesMainPage {
    private experiencesService = inject(ExperiencesService);

    readonly header = {
        titleKey: 'HEADER.EXPERIENCES.TITLE',
        descKey: 'HEADER.EXPERIENCES.DESCRIPTION',
        img: '/assets/imgs/headers/experiences/experiences-header.webp',
        altKey: 'HEADER.EXPERIENCES.ALT'
    };


    private experiencesData = toSignal(this.experiencesService.getExperiences(), {
        initialValue: [] as FeatureItem[]
    });

    items = computed<FeatureTemplateItem[]>(() =>
        this.experiencesData()?.map(item => mapToFeatureTemplateItem(item)) ?? []
    );
}