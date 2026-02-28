import { Component, computed, inject } from '@angular/core';
import { DiscoverPackageDefaultOne } from "../../../../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../../../../presets/discover-services-default/discover-services-default";
import { AdventureGrid } from "../../../components/adventure-grid/adventure-grid";
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from '../../../services/experience.service';
import { catchError, of, tap } from 'rxjs';
import { SectionNavService } from '../../../../../shared/services/section-nav.service';
import { PageHeader } from "../../../../../shared/components/page-header/page-header";
import { PackageCrossList } from "../../../../packages/components/package-cross-list/package-cross-list";

@Component({
  selector: 'adventures-overview-template',
  imports: [DiscoverPackageDefaultOne, DiscoverServicesDefault, AdventureGrid, PageHeader, PackageCrossList],
  templateUrl: './adventures-overview-template.html',
  styleUrl: './adventures-overview-template.css',
})
export class AdventuresOverviewTemplate {
  private experienceService = inject(ExperiencesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private navService = inject(SectionNavService);

  private params = toSignal(this.route.paramMap);

  public slug = computed(() => this.params()?.get('category') || '');

  public category = toSignal(
    this.experienceService.getCategoryDetails(this.slug()).pipe(
      tap(res => {
        if (!res || !res.adventures) {
          console.log()
        this.redirectToParent();
        return; 
      }
      this.navService.initStates(res.adventures);
      }),
      catchError(() => {
        this.redirectToParent();
        return of(undefined);
      })
    )
  );

  redirectToParent() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }



}
