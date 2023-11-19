import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICharacter,
  TCharacterGender,
  TCharacterType,
} from 'src/@types/Character';
import { IDefaultRickAndMortyApiReturn } from 'src/@types/Defaults';
import { environment } from 'src/environments/environment';

interface IGetCharactersSearchParams {
  type?: TCharacterType;
  gender?: TCharacterGender;
  page?: number;
  name?: string;
  species?: string;
  [key: string]: string | number | boolean | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private weatherApiKey: string = '';
  private baseUrl: string = 'https://rickandmortyapi.com/api';
  private apiPaths = {
    character: '/character',
    location: '/location',
    episode: '/episode',
  };

  constructor(private _http: HttpClient) {
    this.weatherApiKey = environment.WEATHER_API_KEY;
    console.log(this.weatherApiKey);
  }

  getCharacters(
    searchParams?: IGetCharactersSearchParams
  ): Observable<IDefaultRickAndMortyApiReturn<ICharacter>> {
    let params = new HttpParams();

    if (searchParams) {
      Object.keys(searchParams).map((key: string) => {
        params = params.append(key, String(searchParams[key]));
      });
    }

    return this._http.get<IDefaultRickAndMortyApiReturn<ICharacter>>(
      `${this.baseUrl}${this.apiPaths.character}`,
      { params }
    );
  }
}

// http://api.weatherstack.com/forecast?access_key=3751468effba142d3034bd1db4c6d855&query=Caldas%20Novas&hourly=1
