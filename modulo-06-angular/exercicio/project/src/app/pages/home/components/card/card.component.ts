import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/@types/Character';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public gender = {
    Male: 'Masculino',
    Female: "Feminino",
    Genderless: "Sem gênero",
    unknown: "Desconhecido",
  }

  public status = {
    Alive: "Vivo",
    Dead: "Morto",
    unknown: "Desconhecido",
  }

  @Input() character: ICharacter = {} as ICharacter;
}
