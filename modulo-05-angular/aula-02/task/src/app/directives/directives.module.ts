import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgRedDirective } from './bg-red.directive';
import { DateAfterNowDirective } from './date-after-now.directive';
import { InputDirective } from './input.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [BgRedDirective, InputDirective, DateAfterNowDirective],
  exports: [BgRedDirective, InputDirective, DateAfterNowDirective],
})
export class DirectivesModule {}
