import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgRedDirective } from './bg-red.directive';
import { DateAfterNowDirective } from './date-after-now.directive';
import { InputDirective } from './input.directive';
import { TextErrorDirective } from './text-error.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [BgRedDirective, InputDirective, DateAfterNowDirective, TextErrorDirective],
  exports: [BgRedDirective, InputDirective, DateAfterNowDirective, TextErrorDirective],
})
export class DirectivesModule {}
