import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProdutosService } from '../../../produtos.service';
import { ItemLojaType } from 'src/types/itemLojaType';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item!: ItemLojaType | undefined;
  @Input() quantity: number = 0;
  @Output() incrementarItem = new EventEmitter<string>();
  @Output() decrementarItem = new EventEmitter<string>();

  constructor(private _produtosService: ProdutosService) {}

  public getItemLojaBy(id: string): ItemLojaType | undefined {
    return this._produtosService.getItemBy(id);
  }

  public incrementar(id: string): void {
    this.incrementarItem.emit(id);
  }

  public decrementar(id: string): void {
    this.decrementarItem.emit(id);
  }
}
