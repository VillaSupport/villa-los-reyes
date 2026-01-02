import { Component, input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PackagesList } from "../discover-package-section/packages-list/packages-list";

@Component({
  selector: 'explore-items-section',
  templateUrl: './explore-items-section.html',
  styleUrl: './explore-items-section.css',
  imports: [CommonModule, RouterLink, TranslatePipe], 
})
export class ExploreItemsSection {
  title = input.required<string>();
  description = input.required<string>();
  linkText = input<string>();
  link = input<string>();
  items = input<any[]>([]);
  cardTemplate = input<TemplateRef<any> | undefined>(); 
}
