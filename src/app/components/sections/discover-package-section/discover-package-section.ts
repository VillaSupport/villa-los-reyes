import { Component, input } from '@angular/core';
import { SectionHeader } from '../../shared/section-header/section-header';
import { PackagesList } from './packages-list/packages-list';
import { DiscoveryHeader } from "../../../shared/components/discovery-header/discovery-header";
import { HeaderData } from '../../../shared/interfaces/common.interface';

@Component({
  selector: 'discover-package-section',
  imports: [PackagesList, DiscoveryHeader],
  templateUrl: './discover-package-section.html',
  styleUrl: './discover-package-section.css'
})
export class DiscoverPackageSection {
  header = input.required<HeaderData>();

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
