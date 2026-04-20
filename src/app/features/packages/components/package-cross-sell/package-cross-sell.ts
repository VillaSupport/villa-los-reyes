import { Component, inject } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay, switchMap, timer } from 'rxjs';
import { mapToPackageCardData } from '../../interfaces/packages.interface';
import { GridCrossSell } from '../../../../shared/components/grid-cross-sell/grid-cross-sell';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { PackageCard } from '../package-card/package-card';
import { getRandomCircularSlice } from '../../../../utils/math.utils';

@Component({
  selector: 'package-cross-sell',
  imports: [GridCrossSell, PackageCard],
  templateUrl: './package-cross-sell.html',
  styleUrl: './package-cross-sell.css',
})
export class PackageCrossSell {
  header: HeaderData = {
    title: 'SECTION_HEADER.ROOMS.TITLE',
    description: 'SECTION_HEADER.ROOMS.DESCRIPTION',
    link: {
      label: 'SECTION_HEADER.ROOMS.LINK_TEXT',
      route: '/packages', // Esta es la ruta de tu aplicación
    },
  };

  packageService = inject(PackageService);

  private mappedPackages$ = this.packageService.getAllPackages().pipe(
    map((packages) => packages?.map((pkg) => mapToPackageCardData(pkg)) ?? []),
    shareReplay(1),
  );

  packages = toSignal(
    timer(0, 10000).pipe(
      switchMap(() =>
        this.mappedPackages$.pipe(
          map((allData) => {
            // Aquí solo ejecutamos la lógica del slice aleatorio sobre los datos ya listos
            return getRandomCircularSlice(allData, 3);
          }),
        ),
      ),
    ),
    { initialValue: [] },
  );
}
