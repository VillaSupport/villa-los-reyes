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
      [header]="header()" 
      [items]="items()">
    </feature-overview-template>
  `
})
export class ExperiencesMainPage {
    private experiencesService = inject(ExperiencesService);

    private experiencesData = toSignal(this.experiencesService.getExperiences(), {
        initialValue: [] as FeatureItem[]
    });

    header = computed(() => ({
        title: 'Nuestras Experiencias',
        description: 'Descubre la magia de Viñales a través de aventuras diseñadas para conectar con la naturaleza.'
    }));

    items = computed<FeatureTemplateItem[]>(() =>
        this.experiencesData()?.map(item => mapToFeatureTemplateItem(item)) ?? []
    );
}