import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";
import { packages } from '../../config/packages-data';

@Component({
  selector: 'discover-package-default-two',
  imports: [DiscoverPackageSection],
  template: `
      <discover-package-section
      [header]="header"
      [packages]="packages"
    ></discover-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultTwo {

  header = {
    title: 'packages.title',
    description: 'packages.description',
    link: { text: 'packages.linkText', url: '/packages' }// TODO: update this path
  };

  packages = packages.slice(3, 6);
}



