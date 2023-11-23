import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rickandmorty.service';
import { IDefaultRickAndMortyApiReturn } from 'src/@types/Defaults';
import { ICharacter } from 'src/@types/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters: ICharacter[] = [];
  public isLoadingCharacters: boolean = false;
  public errorLoadingCharacters: boolean = false;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.isLoadingCharacters = true;
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data: IDefaultRickAndMortyApiReturn<ICharacter>) => {
        this.characters = data.results;

        this.isLoadingCharacters = false;
      },
      error: () => {
        this.isLoadingCharacters = false;
        this.errorLoadingCharacters = true;
      },
      complete: () => {},
    });
  }
}
