import { Component, input } from '@angular/core';
import { PackagesList } from "../discover-package-section/packages-list/packages-list";
import { TranslatePipe } from '@ngx-translate/core';
import { PackageGrid } from "./package-grid/package-grid";

@Component({
  selector: 'discover-all-package-section',
  imports: [TranslatePipe, PackageGrid],
  templateUrl: './discover-all-package-section.html',
  styleUrl: './discover-all-package-section.css'
})
export class DiscoverAllPackageSection {
  header = input.required<{
    title: string,
    description: string
  }>();

  packages = input.required<
    {
      background: string;
      title: string;
      duration: string;
      description: string;
      price: string;
      perUnit: string;
      path: string;
    }[]
  >();
}
