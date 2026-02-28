import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { DiscoveryHeader } from "../discovery-header/discovery-header";
import { ScrollSnapList } from "../scroll-snap-list/scroll-snap-list";
import { HeaderData } from '../../interfaces/common.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'discovery-offering-list',
  imports: [DiscoveryHeader, ScrollSnapList, NgTemplateOutlet],
  templateUrl: './discovery-offering-list.html',
  styleUrl: './discovery-offering-list.css',
})
export class DiscoveryOfferingList {
  header = input.required<HeaderData>();
  data = input.required<any[]>()
  cardTemplate = contentChild.required(TemplateRef);

}
