import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from './components/lista-item/lista-item.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroShoppingCartSolid,
  heroXMarkSolid,
} from '@ng-icons/heroicons/solid';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [ProdutosComponent],
  declarations: [ProdutosComponent, CarrinhoComponent],
  imports: [
    CommonModule,
    ListaItemModule,
    ProdutosRoutingModule,
    NgIconsModule.withIcons({ heroShoppingCartSolid, heroXMarkSolid }),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProdutosService],
})
export class ProdutosModule {}
