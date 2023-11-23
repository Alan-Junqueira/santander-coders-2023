import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/@types/Character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  public characterId: string = '';
  public character: ICharacter = {} as ICharacter;
  public isLoadingCharacter: boolean = false;
  public errorLoadingCharacter: boolean = false;

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

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.characterId = this.route.snapshot.paramMap.get('characterId') ?? '';
    this.isLoadingCharacter = true;
    this.characterService.getCharacter(this.characterId).subscribe({
      next: (data: ICharacter) => {
        console.log(data)
        this.character = data;

        this.isLoadingCharacter = false;
      },
      error: () => {
        this.isLoadingCharacter = false;
        this.errorLoadingCharacter = true;
      },
      complete: () => {},
    });
  }
}
