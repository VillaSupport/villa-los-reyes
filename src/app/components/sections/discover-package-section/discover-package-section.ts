import { Component, input } from '@angular/core';
import { SectionHeader } from '../../shared/section-header/section-header';
import { PackagesList } from './packages-list/packages-list';

@Component({
  selector: 'discover-package-section',
  imports: [SectionHeader, PackagesList],
  templateUrl: './discover-package-section.html',
  styleUrl: './discover-package-section.css'
})
export class DiscoverPackageSection {
  header = input.required<{
    title: string;
    description: string;
    link: { text: string; url: string };
  }>();

  packages = input.required<
    {
      background: string;
      title: string;
      duration: string;
      description: string;
      price: string;
      perUnit:string;
      path: string;
    }[]
  >();
}
