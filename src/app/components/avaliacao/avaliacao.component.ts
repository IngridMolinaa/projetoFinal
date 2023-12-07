import { Component } from '@angular/core';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css'],
})
export class AvaliacaoComponent {
  rate = 0;
  ratingChanged(event: any) {}
}
