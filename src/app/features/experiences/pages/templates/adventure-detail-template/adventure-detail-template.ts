import { Component, computed, inject } from '@angular/core';
import { DetailedGallery } from "../../../../../shared/components/detailed-gallery/detailed-gallery";
import { SectionNav } from "../../../../../shared/components/section-nav/section-nav";
// import { PackagePromoCard } from "../../../../packages/components/package-promo-card/package-promo-card";
import { RoomCard } from "../../../../../components/sections/explore-items-section/room-card/room-card";
import { FeatureDiscovery } from "../../../../../shared/components/feature-discovery/feature-discovery";
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from '../../../services/experience.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, of, switchMap, tap } from 'rxjs';
import { ImgData } from '../../../../../shared/interfaces/common.interface';
import { InfoData } from '../../../../../shared/components/info-block/info-block';
import { PackageService } from '../../../../packages/services/package.service';
import { SectionNavService } from '../../../../../shared/services/section-nav.service';
import { PageHeader } from "../../../../../shared/components/page-header/page-header";

interface AdventureData {
  images: ImgData[];
  info: InfoData;
}

@Component({
  selector: 'app-adventure-detail-template.html',
  templateUrl: './adventure-detail-template.html',
  styleUrl: './adventure-detail-template.css',
  imports: [RoomCard, FeatureDiscovery, DetailedGallery, SectionNav, PageHeader],
})
export class AdventureDetailTemplate {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private expService = inject(ExperiencesService);
  private pkgService = inject(PackageService);
  private navService = inject(SectionNavService);

  public nav = this.navService.currentState;

  adventureResource = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const category = params.get('category') || '';
        const slug = params.get('adventureSlug') || '';

        return this.expService.getAdventureBySlug(category, slug).pipe(
          tap(adventure => {
            if (!adventure) {
              this.redirectToParent();
              return;
            }

            if (!this.navService.currentState()) {
              this.expService.getCategoryDetails(category).subscribe(res => {
                if (res) {
                  this.navService.initStates(res.adventures);
                  this.navService.setCurrentBySlug(slug);
                }
              });
            } else {
              // Si ya tiene estados, solo movemos el puntero al slug actual
              this.navService.setCurrentBySlug(slug);
            }
          }),
          switchMap(adventure => {
            if (!adventure) return of(null);
            // Si hay un paquete relacionado, lo buscamos. Si no, devolvemos solo la aventura.
            if (adventure.relatedPackageSlug) {
              return this.pkgService.getPackageBySlug(adventure.relatedPackageSlug).pipe(
                map(pkg => ({ adventure, pkg }))
              );
            }

            return of({ adventure, pkg: null });
          })
        );
      })
    )
  );




  mainData = computed<AdventureData | null>(() => {
    const data = this.adventureResource();
    if (!data) return null;

    return {
      // Aquí TypeScript ya sabe que images debe ser ImgData[]
      images: data.adventure.imgs,
      info: {
        title: data.adventure.title,
        desc: data.adventure.desc,
        features: data.adventure.tips
      }
    };
  });

  relatedPackage = computed(() => this.adventureResource()?.pkg || null);

  redirectToParent() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  goPrev() { this.navService.goPrev(this.route); }
  goNext() { this.navService.goNext(this.route); }

}
