import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';

import { Subscription } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemos',
  templateUrl: './list-pokemos.component.html',
  styleUrls: ['./list-pokemos.component.css']
})
export class ListPokemosComponent implements OnInit {

  pokemons: Pokemon[] = []
  subscriptions: Subscription[] = [];

  pokemonNameSearch: string = ''

  constructor(private _pokemon: PokemonService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.pokemons = await this.getPokemos();
  }

  getPokemos(): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
      const subsPokemon = this._pokemon
        .getPokemons()
        .subscribe((resp) => {
          resp.map((res) => {
            if (res.image.includes('data:')) {
              res.image = '/assets/images/no-image.jpg'
            }
          })
          resolve(resp);
        });
      this.subscriptions.push(subsPokemon);
    })
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }
}
