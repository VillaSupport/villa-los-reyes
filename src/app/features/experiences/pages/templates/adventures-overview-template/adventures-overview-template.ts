import { Component, computed, inject } from '@angular/core';
import { AdventureGrid } from '../../../components/adventure-grid/adventure-grid';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from '../../../services/experience.service';
import { catchError, of, tap } from 'rxjs';
import { SectionNavService } from '../../../../../shared/services/section-nav.service';
import { PageHeader } from '../../../../../shared/components/page-header/page-header';
import { PackageCrossList } from '../../../../packages/components/package-cross-list/package-cross-list';
import { ServiceCrossList } from '../../../../services-facilities/components/service-cross-list/service-cross-list';
import { HeaderData } from '../../../../../shared/interfaces/common.interface';

@Component({
  selector: 'adventures-overview-template',
  imports: [AdventureGrid, PageHeader, PackageCrossList, ServiceCrossList],
  templateUrl: './adventures-overview-template.html',
  styleUrl: './adventures-overview-template.css',
})
export class AdventuresOverviewTemplate {
  private experienceService = inject(ExperiencesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private navService = inject(SectionNavService);

  readonly header: HeaderData = {
    title: 'HEADER.EXPERIENCES.TITLE',
    description: 'HEADER.EXPERIENCES.DESCRIPTION',
    img: {
      src: 'assets/imgs/headers/experiences/experiences-header.webp',
      alt: 'HEADER.EXPERIENCES.ALT',
    },
  };
  private params = toSignal(this.route.paramMap);
  public slug = computed(() => this.params()?.get('category') || '');

  public category = toSignal(
    this.experienceService.getCategoryDetails(this.slug()).pipe(
      tap((res) => {
        if (!res || !res.adventures) {
        console.error(`Categoría "${this.slug()}" no encontrada o sin datos.`);
          this.redirectToParent();
          return;
        }
        this.navService.initStates(res.adventures);
        console.log(`Categoría "${this.slug()}" encontrada`);

      }),
      catchError(() => {
        this.redirectToParent();
        return of(undefined);
      }),
    ),
  );

  redirectToParent() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
