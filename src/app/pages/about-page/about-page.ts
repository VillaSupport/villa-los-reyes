import { Component } from '@angular/core';
import { SplitLayoutSection } from "../../components/sections/split-layout-section/split-layout-section";
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { PageHeader } from "../../shared/components/page-header/page-header";

@Component({
  selector: 'about-page',
  imports: [GalleryInfoSection, PageHeader, SplitLayoutSection],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {

}
