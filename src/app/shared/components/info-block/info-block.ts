import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface InfoData {
  title: string;
  desc: string;
  featureTitle?: string;
  features?: string[];
  slug?: string;
  linkText?: string;
}
@Component({
  selector: 'info-block',
  imports: [RouterLink],
  templateUrl: './info-block.html',
  styleUrl: './info-block.css',
})

export class InfoBlock {
  data = input.required<InfoData>();
}
