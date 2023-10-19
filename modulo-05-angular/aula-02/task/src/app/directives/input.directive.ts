import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[inputStyle]',
})
export class InputDirective implements OnInit {
  @Input() anyone: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('entrou');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('saiu');
  }

  ngOnInit(): void {
    this.el.nativeElement.classList =
      'rounded-md px-4 py-2 outline-none text-gray-950 bg-neutral-50 focus:ring-offset-2 focus:ring-amber-500 focus:ring-1';
  }
}
