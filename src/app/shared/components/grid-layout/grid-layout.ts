import { CommonModule } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { HeaderData } from '../../interfaces/common.interface';

@Component({
  selector: 'grid-layout',
  imports: [CommonModule],
  templateUrl: './grid-layout.html',
  styleUrl: './grid-layout.css',
})
export class GridLayout {

  items = input<any[]>([]);
  cardTemplate = contentChild.required(TemplateRef);
}
