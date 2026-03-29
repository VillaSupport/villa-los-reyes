import { Injectable, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface NavigationState<> {
  slug: string;
  index: number;

  prev: NavigationState | null;
  next: NavigationState | null;

  isFirst: boolean;
  isLast: boolean;
}

@Injectable()
export class SectionNavService<T extends { slug: string }> {
  private router = inject(Router);
  private state = signal<NavigationState | null>(null);
  private allStates = new Map<string, NavigationState>();

  public currentState = this.state.asReadonly();

  initStates(items: T[]) {
    this.allStates.clear();
    let prevState: NavigationState | null = null;
    items.forEach((item, index) => {
      let newState: NavigationState = {
        slug: item.slug,
        index: index,
        prev: prevState,
        next: null,
        isFirst: index === 0,
        isLast: index === items.length - 1,
      }

      if (prevState) {
        prevState.isLast = false;
        prevState.next = newState
      }

      this.allStates.set(item.slug, newState);
      prevState = newState
    })

  }

  setCurrentBySlug(slug: string) {
    const found = this.allStates.get(slug);
    if (found) {
      this.state.set(found);
    }
  }
  //Una vez se entre en el hijo o sea una vez se mueva de category a category/adventureSlug se haga un set de un nuevo state
  // para eso hay que llevar un map de todos los states

  goNext(relativeTo?: ActivatedRoute) {
    const next = this.state()?.next;
    if (next) {
      this.handleNavigation(next, relativeTo);
    }
  }

  goPrev(relativeTo?: ActivatedRoute) {
    const prev = this.state()?.prev;
    if (prev) {
      this.handleNavigation(prev, relativeTo);
    }
  }

  private handleNavigation(state: NavigationState, relativeTo?: ActivatedRoute) {
    const commands = relativeTo ? ['../', state.slug] : [state.slug];
    this.router.navigate(commands, { relativeTo });
    this.state.set(state)
  }
}