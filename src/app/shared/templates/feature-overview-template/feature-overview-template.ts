import { Component, input } from '@angular/core';
import { MainHeaderSection } from "../../../components/sections/main-header-section/main-header-section";
import { CategoryPreview } from "../../components/category-preview/category-preview";
import { Position } from '../../../components/shared/interfaces/app-interfaces';
import { MainContent, PreviewContent } from '../../interfaces/feature-overview.interface';

export interface FeatureTemplateItem {
  main: MainContent;
  previews: PreviewContent[];
}

@Component({
  selector: 'feature-overview-template',
  imports: [MainHeaderSection, CategoryPreview],
  templateUrl: './feature-overview-template.html',
  styleUrl: './feature-overview-template.css',
})
export class FeatureOverviewTemplate {
  header = input.required<{ title: string; description: string }>();
  headerImage = input<{ src: string; alt: string }>();
  headerPosition = input<Position>("center");
  items = input.required<FeatureTemplateItem[]>();
}
