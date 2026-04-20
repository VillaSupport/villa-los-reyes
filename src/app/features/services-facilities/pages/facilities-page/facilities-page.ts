import { Component, computed, inject } from '@angular/core';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { FacilitiesService } from '../../services/facilities.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  HeaderData,
  InfoData,
} from '../../../../shared/interfaces/common.interface';
import { RoomData } from '../../interfaces/services-facilities.interface';
import { GallerySplitView } from '../../../../shared/components/gallery-split-view/gallery-split-view';
import { RoomsDetailsGrid } from '../../components/rooms-details-grid/rooms-details-grid';

@Component({
  selector: 'facilities-page',
  imports: [PageHeader, GallerySplitView, RoomsDetailsGrid],
  templateUrl: './facilities-page.html',
  styleUrl: './facilities-page.css',
})
export class FacilitiesPage {
  private facilitiesService = inject(FacilitiesService);

  public readonly header: HeaderData = {
    title: 'HEADER.FACILITIES.TITLE',
    description: 'HEADER.FACILITIES.DESCRIPTION',
    img: {
      src: 'assets/imgs/outdoor/gardens/lush-garden-red-flowers-pool.webp',
      alt: 'HEADER.FACILITIES.ALT',
    },
  };

  private rawRooms = toSignal(this.facilitiesService.getRoomSpaces());

  public roomsData = computed(() => {
    const data = this.rawRooms(); // Esto es de tipo RoomSpace | undefined

    if (!data || !data.items) return null;

    return {
      ...data,
      items: data.items.map((item) => ({
        ...item,
        slug: `/services-facilites/${item.slug}`, // Aquí es donde vive el slug
      })),
    };
  });

  spacesData = toSignal(this.facilitiesService.getCommonSpaces(), {
    initialValue: [],
  });

  public readonly info = computed<InfoData>(() => {
    const data = this.roomsData();
    return {
      title: data?.title ?? '', // Provee un string vacío si es undefined
      desc: data?.desc ?? '',
    };
  });
}
