import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'sort-by-typescript';

@Pipe({
  name: 'order'
})
export class OrderbyPipe implements PipeTransform {

  transform(lista: any, params: string): any[] {
    return lista.sort(sortBy(params))
  }

}
