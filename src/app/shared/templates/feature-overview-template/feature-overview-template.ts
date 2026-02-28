import { Component, input } from '@angular/core';
import { CategoryPreview } from "../../components/category-preview/category-preview";
import { AdventurePreview, CategoryDetail,} from '../../interfaces/feature-overview.interface';
import { PageHeader } from "../../components/page-header/page-header";
import { TranslatePipe } from '@ngx-translate/core';

export interface FeatureTemplateItem {
  main: CategoryDetail;
  previews: AdventurePreview[];
}

export interface HeaderConfig {
  titleKey: string;
  descKey: string;
  img: string;
  altKey: string;
}

@Component({
  selector: 'feature-overview-template',
  imports: [CategoryPreview, PageHeader,TranslatePipe],
  templateUrl: './feature-overview-template.html',
  styleUrl: './feature-overview-template.css',
})
export class FeatureOverviewTemplate {
  header = input.required<HeaderConfig>();
  items = input.required<FeatureTemplateItem[]>();
  featureSlug = input.required<string>()
}
