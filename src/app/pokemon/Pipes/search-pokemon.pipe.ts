import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPokemon'
})
export class SearchPokemonPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPokemon = [];

    for (const item of value) {
      if (item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPokemon.push(item);
      };
    };
    return resultPokemon;
  }

}
