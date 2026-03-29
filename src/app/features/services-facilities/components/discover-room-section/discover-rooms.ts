import { Component, inject, input } from '@angular/core';
import { InfoBlock } from '../../../../shared/components/info-block/info-block';
import { InfoData } from '../../../../shared/interfaces/common.interface';
import { RoomsGallery } from '../rooms-gallery/rooms-gallery';
import { RoomData } from '../../interfaces/services-facilities.interface';
import { FacilitiesService } from '../../services/facilities.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'discover-room',
  standalone: true,
  imports: [RoomsGallery, InfoBlock],
  templateUrl: './discover-rooms.html',
  styleUrl: './discover-rooms.css'
})
export class DiscoverRooms {
  facilitiesService = inject(FacilitiesService);

  readonly info:InfoData ={
    title: 'SECTION_HEADER.ROOMS_HOME.TITLE',
    desc: 'SECTION_HEADER.ROOMS_HOME.DESCRIPTION',
    linkText:'SECTION_HEADER.ROOMS_HOME.LINK_TEXT',
    slug:'/room'
  } ;
   rooms = toSignal(
    this.facilitiesService
      .getRoomSpaces()
      .pipe(map((data) => data?.items?.slice(0, 5) ?? [])),
    { initialValue: [] },
  );
}

