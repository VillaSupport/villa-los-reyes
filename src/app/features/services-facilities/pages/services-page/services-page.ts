import { Component, effect, inject } from '@angular/core';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { StayBenefitsService } from '../../services/stay-benefits.service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Benefit,
  StayBenefitsDetail,
} from '../../interfaces/services-facilities.interface';
import { SplitView } from '../../../../shared/components/split-view/split-view';
import {
  HeaderData,
  mapToInfoData,
} from '../../../../shared/interfaces/common.interface';
import { GallerySplitView } from '../../../../shared/components/gallery-split-view/gallery-split-view';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'services-page',
  imports: [PageHeader, SplitView, GallerySplitView],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  stayBenefitService = inject(StayBenefitsService);
  private viewport = inject(ViewportScroller);
  private route = inject(ActivatedRoute);
  constructor() {
    // Escuchamos cuando los datos estén listos
    effect(() => {
      const data = this.benefitsData();
      const fragment = this.route.snapshot.fragment;

      if (data && data.length > 0 && fragment) {
        // Esperamos un micro-tick para que el @for termine de renderizar
        setTimeout(() => {
          this.viewport.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }
  readonly headerData: HeaderData = {
    title: 'HEADER.STAY_BENEFITS.TITLE',
    description: 'HEADER.STAY_BENEFITS.DESCRIPTION',
    img: {
      src: 'assets/imgs/services/gastronomy/dining-table-setup-villa-los-reyes.webp',
      alt: 'HEADER.STAY_BENEFITS.ALT',
    },
  };
  private transformBenefits = (data?: StayBenefitsDetail) =>
    data?.benefits.map((benefit: Benefit) => {
      const { images } = benefit;
      return {
        info: mapToInfoData(benefit, 'LABELS.SERVICES'),
        images,
      };
    }) ?? [];

  benefitsData = toSignal(
    this.stayBenefitService.getStayBenefits().pipe(map(this.transformBenefits)),
    { initialValue: [] },
  );
}
