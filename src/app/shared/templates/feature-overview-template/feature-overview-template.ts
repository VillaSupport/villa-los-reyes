import { Component, inject, input } from '@angular/core';
import { CategoryPreview } from "../../components/category-preview/category-preview";
import { AdventurePreview, CategoryDetail,} from '../../interfaces/feature-overview.interface';
import { PageHeader } from "../../components/page-header/page-header";
import { HeaderData } from '../../interfaces/common.interface';
import { ActivatedRoute } from '@angular/router';

export interface FeatureTemplateItem {
  main: CategoryDetail;
  previews: AdventurePreview[];
}

@Component({
  selector: 'feature-overview-template',
  imports: [CategoryPreview, PageHeader],
  templateUrl: './feature-overview-template.html',
})
export class FeatureOverviewTemplate {
  public route = inject(ActivatedRoute);
  header = input.required<HeaderData>();
  items = input.required<FeatureTemplateItem[]>();
}
