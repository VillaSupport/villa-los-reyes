import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";
import { packages } from '../../config/packages-data';

@Component({
  selector: 'discover-package-default-one',
  imports: [DiscoverPackageSection],
  template: `
   <discover-package-section
      [header]="header"
      [packages]="packages"
    ></discover-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultOne {
  header = {
    title: 'packages.title',
    description: 'packages.description',
    link: { label: 'packages.linkText', route: '/packages' }
  };

  packages = packages.slice(0, 3);
}
