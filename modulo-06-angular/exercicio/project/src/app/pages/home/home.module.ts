import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RickAndMortyService } from './rickandmorty.service';
import { CardComponent } from './components/card/card.component';
import { NgIconsModule } from '@ng-icons/core';
import { radixChevronLeft, radixChevronRight } from '@ng-icons/radix-icons';

@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgIconsModule.withIcons({
      radixChevronLeft,
      radixChevronRight
    }),
  ],
  providers: [RickAndMortyService],
})
export class HomeModule {}
