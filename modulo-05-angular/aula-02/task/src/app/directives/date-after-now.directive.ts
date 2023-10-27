import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDateAfterNow]',
})
export class DateAfterNowDirective implements OnInit {
  @Input() elDate: Date = new Date();
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const now = new Date();
    const nowMs = now.getTime();
    this.elDate = new Date(this.elDate);

    const elTimeMs = this.elDate.getTime();

    if (elTimeMs > nowMs) {
      this.el.nativeElement.classList = 'text-red-500';
    }
  }
}
