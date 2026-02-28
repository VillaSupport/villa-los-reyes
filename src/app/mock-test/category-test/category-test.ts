import { Component } from '@angular/core';
import { CategoryPreview } from '../../shared/components/category-preview/category-preview';

@Component({
  standalone: true,
  selector: 'category-test',
  imports: [CategoryPreview],
  template: `
   
      <category-preview 
        basePath="test-path"
      />
    
      <category-preview 
        [reverse]="true"
        basePath="test-path"
      />
 
  `
})
export class CategoryPreviewTestComponent {
}