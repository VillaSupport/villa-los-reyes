import { Inject, inject, Injectable, InjectionToken } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export const PARENT_PATH = new InjectionToken<string>('ParentPath');

@Injectable()
export class GroupNavigatorService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private paths: string[] = [];

  constructor(@Inject(PARENT_PATH) private parentPath: string) {}

  init() {
    // Buscar rutas que coincidan exactamente con el path padre
    const matchingRoutes = this.router.config.filter(r => r.path === this.parentPath);

    if (!matchingRoutes.length) return;

    // Tomar todos los hijos definidos en esa ruta
    this.paths = [];
    for (const route of matchingRoutes) {
      if (route.children?.length) {
        this.paths.push(...route.children.map(c => c.path!).filter(Boolean));
      }
    }
  }

  next() {
    const currentIndex = this.paths.indexOf(this.getCurrentChildPath());
    const nextIndex = currentIndex + 1 < this.paths.length ? currentIndex + 1 : 0;
    this.navigateToChild(nextIndex);
  }

  prev() {
    const currentIndex = this.paths.indexOf(this.getCurrentChildPath());
    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : this.paths.length - 1;
    this.navigateToChild(prevIndex);
  }

  private getCurrentChildPath(): string {
    let currentRoute = this.route;

    // Bajar hasta la ruta más profunda real
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    const segments = currentRoute.snapshot.url.map(s => s.path);
    return segments[segments.length - 1] ?? '';
  }

  private navigateToChild(index: number) {
    const nextPath = this.paths[index];
    const fullPath = `${this.parentPath}/${nextPath}`;
    this.router.navigate([fullPath]);
  }
}
