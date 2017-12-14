import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(value: number, tax = 19): number {
    return value * (1 + tax / 100);
  }

}
