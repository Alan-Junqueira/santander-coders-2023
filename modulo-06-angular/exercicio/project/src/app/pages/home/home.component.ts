import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RickAndMortyService } from './rickandmorty.service';
import {
  IDefaultRickAndMortyApiReturn,
  TRickAndMortyApiInfo,
} from 'src/@types/Defaults';
import { ICharacter } from 'src/@types/Character';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  public characters: ICharacter[] = [];
  public isLoadingCharacters: boolean = false;
  public errorLoadingCharacters: boolean = false;

  public charactersPageInfo: TRickAndMortyApiInfo = {} as TRickAndMortyApiInfo;

  public nextPage?: string = '';
  public prevPage?: string = '';

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((searchParams) => {
      this.isLoadingCharacters = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.rickAndMortyService.getCharacters(searchParams).subscribe({
        next: ({
          info,
          results,
        }: IDefaultRickAndMortyApiReturn<ICharacter>) => {
          this.characters = results;
          this.charactersPageInfo = { ...info };

          this.nextPage = info.next?.split('=')[1];
          this.prevPage = info.prev?.split('=')[1];

          if (info.next) {
            this.charactersPageInfo.next = `/personagens`;
          }

          if (info.prev) {
            this.charactersPageInfo.prev = `/personagens`;
          }

          this.isLoadingCharacters = false;
        },
        error: () => {
          this.isLoadingCharacters = false;
          this.errorLoadingCharacters = true;
        },
        complete: () => {},
      });
    });
  }
}
