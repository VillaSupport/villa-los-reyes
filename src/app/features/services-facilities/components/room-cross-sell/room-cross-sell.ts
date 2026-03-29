import { Component, inject } from '@angular/core';
import { RoomCard } from '../room-card/room-card';
import { DiscoveryOfferingList } from '../../../../shared/components/discovery-offering-list/discovery-offering-list';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { StayBenefitsService } from '../../services/stay-benefits.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { mapToBenefitCard } from '../../interfaces/services-facilities.interface';
import { FacilitiesService } from '../../services/facilities.service';
import { RoomCardSecondary } from '../room-card-secondary/room-card-secondary';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'room-cross-sell]',
  imports: [RouterLink, TranslatePipe, RoomCardSecondary],
  templateUrl: './room-cross-sell.html',
  styleUrl: './room-cross-sell.css',
})
export class RoomCrossSell {
  facilitiesService = inject(FacilitiesService);

  header: HeaderData = {
    title: 'SECTION_HEADER.ROOMS.TITLE',
    description: 'SECTION_HEADER.ROOMS.DESCRIPTION',
    link: {
      label: 'SECTION_HEADER.ROOMS.LINK_TEXT',
      route: '/packages', // Esta es la ruta de tu aplicación
    },
  };

  rooms = toSignal(
    this.facilitiesService
      .getRoomSpaces()
      .pipe(map((data) => data?.items?.slice(0, 3) ?? [])),
    { initialValue: [] },
  );
}
