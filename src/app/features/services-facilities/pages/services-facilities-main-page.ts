import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

// Componentes / Templates
import { FeatureOverviewTemplate, FeatureTemplateItem } from "../../../shared/templates/feature-overview-template/feature-overview-template";

// Servicios e Interfaces
import { ServicesMainService } from '../services/services-main.service';
import { FeatureItem, mapToFeatureTemplateItem } from '../../../shared/interfaces/feature-overview.interface';
import { HeaderData } from '../../../shared/interfaces/common.interface';
import { ReviewsCrossList } from "../../reviews/components/reviews-cross-list/reviews-cross-list";

@Component({
    selector: 'services-main',
    standalone: true,
    imports: [CommonModule, FeatureOverviewTemplate, ReviewsCrossList],
    template: `
    <feature-overview-template 
      [header]="header" 
      [items]="items()" >
    </feature-overview-template>
    <reviews-cross-list>
    </reviews-cross-list>
  `
})
export class ServicesFacilitiesMainPage {
     readonly header:HeaderData = {
        title: 'HEADER.SERVICES.TITLE',
        description: 'HEADER.SERVICES.DESCRIPTION',
        img:{
            src: '/assets/imgs/services/gastronomy/villa-los-reyes-bar-sign-rustic.webp',
            alt: 'HEADER.SERVICES.ALT'
        }
    }; 
    
    private servicesMainService = inject(ServicesMainService);

    private servicesData = toSignal(this.servicesMainService.getServicesMain(), {
        initialValue: [] as FeatureItem[]
    });

   

    items = computed<FeatureTemplateItem[]>(() =>
        this.servicesData()?.map(item => mapToFeatureTemplateItem(item)) ?? []
    );
}
