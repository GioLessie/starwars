import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entityArrayMask',
})
export class EntityArrayMaskPipe implements PipeTransform {
  transform(value: string | number | string[], ...args: unknown[]): unknown {
    return typeof value === 'string' || typeof value === 'number'
      ? value
      : `${value.length} items`;
  }
}
