import { Component, computed, effect, inject, input } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { switchMap, tap } from 'rxjs';
import { SectionNav } from '../../../../shared/components/section-nav/section-nav';
import { SectionNavService } from '../../../../shared/services/section-nav.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageData } from '../../interfaces/packages.interface';

@Component({
  selector: 'package-itinerary',
  imports: [TranslatePipe, SectionNav],
  templateUrl: './package-itinerary.html',
  styleUrl: './package-itinerary.css',
})
export class PackageItinerary {
  // --- Services ---
  private readonly packageService = inject(PackageService);
  private readonly navService = inject(SectionNavService);
  private readonly route = inject(ActivatedRoute);
private readonly router = inject(Router);
  // --- Inputs ---
  slug = input.required<string>();
  package = input<PackageData>();

  // --- Signals ---
  public nav = this.navService.currentState;

  // Obtenemos los datos del paquete y disparamos la navegación
  constructor() {
    // Usamos un effect para reaccionar cuando cambie el paquete o el slug
    effect(() => {
      const currentPkg = this.package();
      const currentSlug = this.slug();

      if (currentPkg) {
        this.ensureNavigationInitialized(currentSlug);
      }
    });
  }

  private ensureNavigationInitialized(currentSlug: string) {
    if (!this.navService.currentState()) {
      this.packageService.getAllPackages().subscribe((packages) => {
        if (packages?.length > 0) {
          this.navService.initStates(packages);
          this.navService.setCurrentBySlug(currentSlug);
        }
      });
    } else {
      this.navService.setCurrentBySlug(currentSlug);
    }
  }

  onReserve() {
    // Navega a booking/ seguido del slug actual
    this.router.navigate(['booking', this.slug()]);
  }
  
  // --- Nav Actions ---
  goPrev() {
    this.navService.goPrev(this.route);
  }

  goNext() {
    this.navService.goNext(this.route);
  }
}
