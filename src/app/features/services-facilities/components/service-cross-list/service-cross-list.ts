import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { StayBenefitsService } from '../../services/stay-benefits.service';
import { DiscoveryOfferingList } from "../../../../shared/components/discovery-offering-list/discovery-offering-list";
import { map, tap } from 'rxjs';
import { mapToBenefitCard } from '../../interfaces/services-facilities.interface';
import { ServiceCard } from "../service-card/service-card";

@Component({
   selector: 'service-cross-list',
   imports: [DiscoveryOfferingList, ServiceCard],
   templateUrl: './service-cross-list.html',
   styleUrl: './service-cross-list.css',
})
export class ServiceCrossList {
   benefitsService = inject(StayBenefitsService);

   header: HeaderData = {
      title: 'SECTION_HEADER.STAY_BENEFITS.TITLE',
      description: 'SECTION_HEADER.STAY_BENEFITS.DESCRIPTION',
      link: {
         label: 'SECTION_HEADER.STAY_BENEFITS.LINK_TEXT',
         route: '/packages' // Esta es la ruta de tu aplicación
      }
   };

   benefitCardsData = toSignal(
      this.benefitsService.getStayBenefits().pipe(
         map(data => data?.benefits.map(b => mapToBenefitCard(b, data.category)) ?? [])
      ),
      { initialValue: [] }
   );
}

