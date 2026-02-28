import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { StayBenefitsService } from '../../services/stay-benefits.service';
import { DiscoveryOfferingList } from "../../../../shared/components/discovery-offering-list/discovery-offering-list";
import { map } from 'rxjs';

@Component({
   selector: 'app-service-cross-list',
   imports: [DiscoveryOfferingList],
   templateUrl: './service-cross-list.html',
   styleUrl: './service-cross-list.css',
})
export class ServiceCrossList {
   benefitsService = inject(StayBenefitsService);

   header: HeaderData = {
      title: 'SECTION_HEADER.PACKAGE.TITLE',
      description: 'SECTION_HEADER.PACKAGE.DESCRIPTION',
      link: {
         text: 'SECTION_HEADER.PACKAGE.LINK_TEXT',
         url: '/packages' // Esta es la ruta de tu aplicación
      }
   };

   benefits = toSignal(
      this.benefitsService.getStayBenefits().pipe(
         map(data => {
            if (!data) return [];

            // Transformamos cada Benefit en el formato de la carta
            return data.benefits.map(b => ({
               title: b.title,
               src: b.images[0]?.src || 'assets/placeholder.jpg', // Tomamos la primera imagen
               alt: b.images[0]?.alt || b.title,
               path: `/services-facilities/stayBenefits`, // La ruta base
               fragment: b.slug // Usamos el slug como fragmento para scroll snap
            }));
         })
      ),
      { initialValue: [] }
   );

   cardData = input<any>()
   // cardData = computed(() =>
   // this.packages().map(pkg => mapToPackageCardData(pkg))
   // );
}

