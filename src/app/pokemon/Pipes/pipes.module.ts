import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonPipe } from './search-pokemon.pipe';



@NgModule({
  declarations: [SearchPokemonPipe],
  imports: [
    CommonModule
  ],
  exports: [SearchPokemonPipe]
})
export class PipesModule { }
