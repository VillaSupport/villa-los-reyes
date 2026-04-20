import { Component, computed, inject, input } from '@angular/core';
import { ImgData } from '../../../../shared/interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomData } from '../../interfaces/services-facilities.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'room-card',
  imports: [TranslatePipe, RouterLink, NgTemplateOutlet],
  templateUrl: './room-card.html',
  styleUrl: './room-card.css',
})
export class RoomCard {
  route = inject(ActivatedRoute);
  room = input.required<RoomData>();
 
  variant = input<'default' | 'discover'>('default');
  isRelative = input<boolean>(false);

  mainImage = computed<ImgData>(
    () => this.room().images?.[0] ?? { src: 'placeholder.jpg', alt: 'default' },
  );

  
 public readonly routeInfo = computed(() => {
    const slug = this.room().slug;
    // Si el objeto room no tiene slug, devolvemos un estado seguro
    if (!slug) return undefined;

    const [pathPart, fragment] = slug.split('#');
    const pathSegments = pathPart.split('/').filter(s => s !== '');

    return {
      commands: pathSegments.length > 0 ? pathSegments : ['./'],
      fragment: fragment || undefined
    };
  });
}
