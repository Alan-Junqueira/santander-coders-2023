import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  exports: [CarrinhoComponent],
  declarations: [CarrinhoComponent, CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
    InputTextModule
  ],
})
export class CarrinhoModule {}
