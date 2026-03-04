import { Component, input } from '@angular/core';
import { CategoryPreview } from "../../components/category-preview/category-preview";
import { AdventurePreview, CategoryDetail,} from '../../interfaces/feature-overview.interface';
import { PageHeader } from "../../components/page-header/page-header";
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderData } from '../../interfaces/common.interface';

export interface FeatureTemplateItem {
  main: CategoryDetail;
  previews: AdventurePreview[];
}

@Component({
  selector: 'feature-overview-template',
  imports: [CategoryPreview, PageHeader],
  templateUrl: './feature-overview-template.html',
  styleUrl: './feature-overview-template.css',
})
export class FeatureOverviewTemplate {
  header = input.required<HeaderData>();
  items = input.required<FeatureTemplateItem[]>();
  featureSlug = input.required<string>()
}
