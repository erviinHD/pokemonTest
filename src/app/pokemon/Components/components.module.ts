import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemosComponent } from './list-pokemons/list-pokemos.component';

@NgModule({
  declarations: [ListPokemosComponent],
  imports: [
    CommonModule,
  ],
  exports: [ListPokemosComponent]
})
export class ComponentsModule { }
