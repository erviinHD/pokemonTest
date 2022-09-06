import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemosComponent } from './list-pokemons/list-pokemos.component';
import { PipesModule } from '../Pipes/pipes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListPokemosComponent],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ListPokemosComponent]
})
export class ComponentsModule { }
