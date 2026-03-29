import { Component, computed, inject } from '@angular/core';
import { PageHeader } from "../../../../shared/components/page-header/page-header";
import { GallerySplitView } from "../../../../shared/components/gallery-split-view/gallery-split-view";
import { ActivatedRoute, Router } from '@angular/router';
import { FacilitiesService } from '../../services/facilities.service';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PackagesOffer } from "../../../packages/components/package-offer/package-offer";
import { ServiceCrossList } from "../../components/service-cross-list/service-cross-list";
import { ExperiencesCrossSell } from "../../../experiences/components/experiences-cross-sell/experiences-cross-sell";
import { SectionNav } from "../../../../shared/components/section-nav/section-nav";
import { SectionNavService } from '../../../../shared/services/section-nav.service';
import { HeaderData } from '../../../../shared/interfaces/common.interface';

@Component({
  selector: 'room-page',
  imports: [PageHeader, GallerySplitView, PackagesOffer, ServiceCrossList, ExperiencesCrossSell, SectionNav],
  templateUrl: './room-page.html',
  styleUrl: './room-page.css',
})
export class RoomPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private facilitiesService = inject(FacilitiesService);
  private navService = inject(SectionNavService);

  // --- Signals Base ---
  public nav = this.navService.currentState;

  // Cargamos la habitación basándonos en el ID de la URL
  room = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id') || ''),
      switchMap(id => this.facilitiesService.getRoomById(id).pipe(
        tap(room => {
          if (!room) return this.redirectToParent();
          this.ensureNavigationInitialized(id);
        }),
        catchError(() => {
          this.redirectToParent();
          return EMPTY;
        })
      ))
    )
  );

  // 1. Preparamos el Header dinámicamente
  headerData = computed<HeaderData>(() => {
    const currentRoom = this.room();
    const index = currentRoom?.headerIndex ?? 0;
    return {
      title: "HEADER.ROOMS.TITLE",
      description: "HEADER.ROOMS.DESCRIPTION",
      img: currentRoom?.images?.[index]
    };
  });

  // 2. Preparamos la info para la galería
  galleryInfo = computed(() => ({
    title: this.room()?.title ?? '',
    desc: this.room()?.desc ?? '',
    featureTitle: 'LABELS.ROOM_FEATURES', // Usamos la nueva sección de traducción
    features: this.room()?.features ?? [],
  }));

  // 3. Separación de imágenes para la galería
  mainImage = computed(() => this.room()?.images?.[0]);
  thumbnails = computed(() => this.room()?.images?.slice(1, 4) ?? []);

  // --- Lógica de Navegación ---
  private ensureNavigationInitialized(id: string) {
    if (!this.navService.currentState()) {
      this.facilitiesService.getRoomSpaces().subscribe(res => {
        if (res?.items) {
          const itemsForNav = res.items.map(item => ({ ...item, slug: item.id }));
          this.navService.initStates(itemsForNav);
          this.navService.setCurrentBySlug(id);
        }
      });
    } else {
      this.navService.setCurrentBySlug(id);
    }
  }

  public readonly packageConfig = computed(() => {
  const currentRoom = this.room();
  const slug = currentRoom?.relatedPackageSlug;

  return {
    slug: slug ?? '',
    subtitle: 'LABELS.OFFERS',
    baseRoute: { 
      text: 'LABELS.EXPLORE', 
      url: '/package/' 
    },
    hasPackage: !!slug // Nos servirá para el @if en el HTML
  };
});

  redirectToParent() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  goPrev() { this.navService.goPrev(this.route); }
  goNext() { this.navService.goNext(this.route); }
}
