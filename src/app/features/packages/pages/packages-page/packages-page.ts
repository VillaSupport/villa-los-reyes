import { Component, inject } from '@angular/core';
import { PageHeader } from "../../../../shared/components/page-header/page-header";
import { HeaderData, InfoData } from '../../../../shared/interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { PackageGrid } from "../../components/packages-grid/packages-grid";
import { toSignal } from '@angular/core/rxjs-interop';
import { PackageService } from '../../services/package.service';
import { map } from 'rxjs';
import { mapToPackageCardData } from '../../interfaces/packages.interface';

@Component({
  selector: 'packages-page',
  imports: [PageHeader, TranslatePipe, PackageGrid],
  templateUrl: './packages-page.html',
  styleUrl: './packages-page.css',
})
export class PackagesPage {
  
   packageService = inject(PackageService)
   readonly header: HeaderData = {
      title: 'HEADER.PACKAGES.TITLE',
      description: 'HEADER.PACKAGES.DESCRIPTION',
      img:{
        src: 'assets/imgs/adventures/horseback/classic-vinales/classic-vinales-valley-panorama.webp',
        alt: ''
      }
    }

    readonly headerSection:InfoData={
      title: 'SECTION_HEADER.PACKAGES.TITLE',
      desc: 'SECTION_HEADER.PACKAGES.DESCRIPTION'
    }
    packages = toSignal(
      this.packageService.getAllPackages().pipe(
         map(packages => packages?.map(pkg => mapToPackageCardData(pkg)) ?? [])
      ),
      { initialValue: [] }
   );

}
