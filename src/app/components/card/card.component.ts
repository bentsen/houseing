import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() imagePath: string | undefined;
  @Input() propertyName: string | undefined;
  @Input() location: string | undefined;

  constructor() {}
}
