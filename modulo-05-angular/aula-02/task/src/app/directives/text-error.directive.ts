import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[textError]',
})
export class TextErrorDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.classList = 'text-red-500 text-sm ';
  }
}
