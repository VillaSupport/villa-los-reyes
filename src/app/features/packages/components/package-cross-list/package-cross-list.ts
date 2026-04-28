import { Component, computed, inject } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { mapToPackageCardData } from '../../interfaces/packages.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { PackageCard } from '../package-card/package-card';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { DiscoveryOfferingList } from '../../../../shared/components/discovery-offering-list/discovery-offering-list';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'package-cross-list',
  imports: [PackageCard, DiscoveryOfferingList],
  templateUrl: './package-cross-list.html',
  styleUrl: './package-cross-list.css',
})
export class PackageCrossList {
  packageService = inject(PackageService);
  private breakpointObserver = inject(BreakpointObserver);

  header: HeaderData = {
    title: 'SECTION_HEADER.PACKAGE.TITLE',
    description: 'SECTION_HEADER.PACKAGE.DESCRIPTION',
    link: {
      label: 'SECTION_HEADER.PACKAGE.LINK_TEXT',
      route: '/packages', // Esta es la ruta de tu aplicación
    },
  };

  isMobile = toSignal(
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  private allPackages = toSignal(
    this.packageService
      .getAllPackages()
      .pipe(
        map(
          (packages) => packages?.map((pkg) => mapToPackageCardData(pkg)) ?? [],
        ),
      ),
    { initialValue: [] },
  );

  packageCardsData = computed(() => {
    const packages = this.allPackages();

    if (this.isMobile()) {
      return packages.slice(0, 3); // Solo los primeros 3 en móvil
    }

    return packages; // Todos los paquetes en escritorio
  });
}
