import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'feature-discovery',
  imports: [RouterLink],
  templateUrl: './feature-discovery.html',
  styleUrl: './feature-discovery.css',
})
export class FeatureDiscovery {
  title = input.required<string>();
  description = input.required<string>();

  linkText = input<string>();
  link = input<string>();
}
