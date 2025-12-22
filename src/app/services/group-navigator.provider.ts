// group-navigator.provider.ts
import { FactoryProvider } from '@angular/core';
import { GroupNavigatorService } from './group-navigator-service';

export function groupNavigatorProvider(parentPath: string): FactoryProvider {
  return {
    provide: GroupNavigatorService,
    useFactory: () => {
      const service = new GroupNavigatorService(parentPath);
      service.init();
      return service;
    }
  };
}
