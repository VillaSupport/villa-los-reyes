import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { HeaderData } from '../../interfaces/common.interface';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'grid-cross-sell',
  imports: [RouterLink, TranslatePipe,NgTemplateOutlet],
  templateUrl: './grid-cross-sell.html',
  styleUrl: './grid-cross-sell.css',
})
export class GridCrossSell {

  header = input.required<HeaderData>();
  items = input.required<any[]>();
  itemTemplate = contentChild.required<TemplateRef<any>>('itemTemplate');
}
