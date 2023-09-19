import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value
      .replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      })
      .replace(/[_]/g, function (letter) {
        return ' ';
      });
  }
}
