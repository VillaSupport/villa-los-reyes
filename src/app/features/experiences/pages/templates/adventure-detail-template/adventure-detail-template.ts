import { Component, computed, inject } from '@angular/core';
import { DetailedGallery } from '../../../../../shared/components/detailed-gallery/detailed-gallery';
import { SectionNav } from '../../../../../shared/components/section-nav/section-nav';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from '../../../services/experience.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {switchMap, tap } from 'rxjs';
import {
  HeaderData,
  ImgData,
  InfoData,
} from '../../../../../shared/interfaces/common.interface';
import { PackageService } from '../../../../packages/services/package.service';
import { SectionNavService } from '../../../../../shared/services/section-nav.service';
import { PageHeader } from '../../../../../shared/components/page-header/page-header';
import { PackagesOffer } from '../../../../packages/components/package-offer/package-offer';
import { RoomCrossSell } from '../../../../services-facilities/components/room-cross-sell/room-cross-sell';

interface AdventureData {
  images: ImgData[];
  info: InfoData;
}

@Component({
  selector: 'adventure-detail-template.html',
  templateUrl: './adventure-detail-template.html',
  styleUrl: './adventure-detail-template.css',
  imports: [
    DetailedGallery,
    SectionNav,
    PageHeader,
    PackagesOffer,
    RoomCrossSell,
  ],
})
export class AdventureDetailTemplate {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private expService = inject(ExperiencesService);
  private pkgService = inject(PackageService);
  private navService = inject(SectionNavService);

  public nav = this.navService.currentState;

  readonly header: HeaderData = {
    title: 'HEADER.EXPERIENCES.TITLE',
    description: 'HEADER.EXPERIENCES.DESCRIPTION',
  };
  adventureResource = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const category = params.get('category') || '';
        const slug = params.get('adventureSlug') || '';

        return this.expService.getAdventureBySlug(category, slug).pipe(
          tap((adventure) => {
            if (!adventure) {
              this.redirectToParent();
              return;
            }

            if (!this.navService.currentState()) {
              this.expService.getCategoryDetails(category).subscribe((res) => {
                if (res) {
                  this.navService.initStates(res.adventures);
                  this.navService.setCurrentBySlug(slug);
                }
              });
            } else {
              this.navService.setCurrentBySlug(slug);
            }
          }),
        );
      }),
    ),
  );

  mainData = computed<AdventureData | null>(() => {
    const data = this.adventureResource();
    if (!data) return null;

    return {
      images: data.imgs,
      info: {
        title: data.title,
        desc: data.desc,
        featureTitle: 'LABELS.RECOMMENDATION',
        features: data.tips,
      },
    };
  });

  private relatedPackage = computed(
    () => this.adventureResource()?.relatedPackageSlug || null,
  );

  public readonly packageConfig = computed(() => {
    const slug = this.relatedPackage();

    return {
      slug: slug ?? '',
      subtitle: 'LABELS.OFFERS',
      // 1. Añadimos la propiedad baseRoute aquí:
      baseRoute: {
        text: 'LABELS.EXPLORE',
        url: '/packages/',
      },
      // 2. Mantenemos el flag para el control de la vista
      hasPackage: !!slug,
    };
  });

  redirectToParent() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  goPrev() {
    this.navService.goPrev(this.route);
  }
  goNext() {
    this.navService.goNext(this.route);
  }
}
