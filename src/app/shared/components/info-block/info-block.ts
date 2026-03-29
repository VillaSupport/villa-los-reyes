import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoData } from '../../interfaces/common.interface';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'info-block',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './info-block.html',
  styleUrl: './info-block.css',
})

export class InfoBlock {
  data = input.required<InfoData>();
}
