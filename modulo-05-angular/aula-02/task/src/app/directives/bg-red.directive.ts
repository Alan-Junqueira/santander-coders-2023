import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgRed]',
})
export class BgRedDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
