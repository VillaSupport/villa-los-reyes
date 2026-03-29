import { Component, computed, inject, input } from '@angular/core';
import { PackageData } from '../../interfaces/packages.interface';
import { PackageService } from '../../services/package.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'package-offer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './package-offer.html',
  styleUrl: './package-offer.css',
})
export class PackagesOffer {

  private packageService = inject(PackageService);
  
  slug = input.required<string>();
  subtitle = input.required<string>();
  baseRoute = input<{ text: string; url: string }>();

  route = computed(() => {
    const base = this.baseRoute();
    if (!base) return null;

    return {
      text: base.text,
      url: `${base.url}${this.slug()}`
    };
  });

  package = toSignal(
    toObservable(this.slug).pipe(
      switchMap(slug => this.packageService.getPackageBySlug(slug))
    )
  );
  
}
