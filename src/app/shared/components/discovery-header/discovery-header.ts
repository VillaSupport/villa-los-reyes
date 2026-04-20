import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MarkdownLinksDirective } from '../../directives/markdown-links.directive';
import { HeaderData } from '../../interfaces/common.interface';

@Component({
  selector: 'discovery-header',
  imports: [RouterLink, TranslatePipe, MarkdownLinksDirective],
  templateUrl: './discovery-header.html',
  styleUrl: './discovery-header.css',
})
export class DiscoveryHeader {

  header = input.required<HeaderData>();

}
