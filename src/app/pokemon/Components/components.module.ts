import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListPokemosComponent } from './list-pokemons/list-pokemos.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { PipesModule } from '../Pipes/pipes.module';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [ListPokemosComponent, ButtonsComponent],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [ListPokemosComponent]
})
export class ComponentsModule { }
