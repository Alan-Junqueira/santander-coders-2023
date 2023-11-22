import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
