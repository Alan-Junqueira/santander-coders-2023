import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemComponent } from './lista-item.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ListaItemComponent, ItemCardComponent],
  providers: [],
  exports: [ListaItemComponent],
  imports: [CommonModule, CardModule, ButtonModule],
})
export class ListaItemModule {}
