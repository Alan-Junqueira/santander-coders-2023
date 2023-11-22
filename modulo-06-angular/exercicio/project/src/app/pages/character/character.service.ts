import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from 'src/@types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private baseUrl: string = 'https://rickandmortyapi.com/api';
  private apiPaths = {
    character: '/character',
    location: '/location',
    episode: '/episode',
  };
  constructor(private _http: HttpClient) {}

  getCharacter(characterId: string) {
    return this._http.get<ICharacter>(
      `${this.baseUrl}${this.apiPaths.character}/${characterId}`
    );
  }
}
