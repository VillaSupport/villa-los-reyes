import { Component, computed, inject } from '@angular/core';
import { DiscoverPackageDefaultOne } from "../../../../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../../../../presets/discover-services-default/discover-services-default";
import { AdventureGrid } from "../../../components/adventure-grid/adventure-grid";
import { MainHeaderSection } from "../../../../../components/sections/main-header-section/main-header-section";
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ExperiencesService } from '../../../services/experience.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'adventures-overview-template',
  imports: [DiscoverPackageDefaultOne, DiscoverServicesDefault, AdventureGrid, MainHeaderSection],
  templateUrl: './adventures-overview-template.html',
  styleUrl: './adventures-overview-template.css',
})
export class AdventuresOverviewTemplate {
  redirectToParent() {
    throw new Error('Method not implemented.');
  }
  
  private experienceService = inject(ExperiencesService);
  private route = inject(ActivatedRoute);
 
  private params = toSignal(this.route.paramMap);
  
  public categoryName = computed(() => this.params()?.get('category') || ''); 

  public category = toSignal(
    this.experienceService.getCategoryDetails(this.categoryName()).pipe(
      catchError(() => {
        // Si la categoría no existe (404), redirigimos al padre
        this.redirectToParent();
        return of(null);
      })
    )
  );

}
