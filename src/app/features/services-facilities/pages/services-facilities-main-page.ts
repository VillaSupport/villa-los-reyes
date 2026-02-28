import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

// Componentes / Templates
import { FeatureOverviewTemplate, FeatureTemplateItem, HeaderConfig } from "../../../shared/templates/feature-overview-template/feature-overview-template";

// Servicios e Interfaces
import { ServicesMainService } from '../services/services-main.service';
import { FeatureItem, mapToFeatureTemplateItem } from '../../../shared/interfaces/feature-overview.interface';

@Component({
    selector: 'app-services-main',
    standalone: true,
    imports: [CommonModule, FeatureOverviewTemplate],
    template: `
    <feature-overview-template 
      [header]="header()" 
      [items]="items()" [featureSlug]="'service'">
    </feature-overview-template>
  `
})
export class ServicesFacilitiesMainPage {
    private servicesMainService = inject(ServicesMainService);

    private servicesData = toSignal(this.servicesMainService.getServicesMain(), {
        initialValue: [] as FeatureItem[]
    });

    header = computed(() => ({
        titleKey: 'Servicios y Facilidades',
        descKey: 'Todo lo que necesitas para una estancia perfecta. Desde instalaciones modernas hasta servicios personalizados de gastronomía y bienestar.',
        altKey: '',
        img: ''
    }));

    items = computed<FeatureTemplateItem[]>(() =>
        this.servicesData()?.map(item => mapToFeatureTemplateItem(item)) ?? []
    );
}
