import { Component } from '@angular/core';
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { SplitLayoutSection } from "../../components/sections/split-layout-section/split-layout-section";
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'services-page',
  imports: [GalleryInfoSection, SplitLayoutSection, PageHeader],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

}
