import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/@types/Character';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() character: ICharacter = {} as ICharacter;
}
