import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multBy'
})
export class MultByPipe implements PipeTransform {

  transform(value: number, pow: number): number {
    return Math.pow(value, pow)
  }

}
