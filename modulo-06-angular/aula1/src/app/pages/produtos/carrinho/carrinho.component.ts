import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemLojaType } from 'src/types/itemLojaType';
import { ItemPedidoType } from 'src/types/pedidoType';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit{
  isModalOpen = false;


  @Input() carrinho: ItemPedidoType[] = [];
  @Input() itensDaLoja: ItemLojaType[] = [];
  @Output() incrementarItem = new EventEmitter<string>();
  @Output() decrementarItem = new EventEmitter<string>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isModalOpen && event.key === 'Escape') {
      this.closeCardModal();
    }
  }

  formCart!: FormGroup

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formCart = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }


  submitCart() {
    console.log(this.formCart.value);
    console.log(this.carrinho)
  }

  public incrementar(id: string): void {
    this.incrementarItem.emit(id);
  }

  public decrementar(id: string): void {
    this.decrementarItem.emit(id);
  }

  public getItemById(id: string): ItemLojaType | undefined {
    return this.itensDaLoja.find((item) => item.id === id);
  }

  public getTotal() {
    return this.carrinho.reduce((acc, item) => {
      const itemLoja = this.getItemById(item.productId);
      if (itemLoja) {
        return acc + itemLoja.price * item.quantity;
      }
      return acc;
    }, 0);
  }

  public openCardModal() {
    const modal = document.getElementById('cartModal');
    const body = document.body;
    if (modal) {
      modal.style.display = 'flex';
      body.style.overflow = 'hidden';
      this.isModalOpen = true;
    }
  }

  public closeCardModal() {
    const modal = document.getElementById('cartModal');
    const body = document.body;
    if (modal) {
      modal.style.display = 'none';
      body.style.overflow = 'auto';
      this.isModalOpen = false;
    }
  }
}
