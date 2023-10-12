import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(
    value: number | string,
    formatOptions: Intl.NumberFormatOptions
  ): unknown {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    const { currency } = formatOptions;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency || 'BRL',
    }).format(value);
  }
}
