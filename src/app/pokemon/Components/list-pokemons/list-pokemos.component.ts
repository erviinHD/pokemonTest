import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';

import { Subscription } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';
import { AlertsService } from '../../Services/alerts.service';

@Component({
  selector: 'app-list-pokemos',
  templateUrl: './list-pokemos.component.html',
  styleUrls: ['./list-pokemos.component.css']
})
export class ListPokemosComponent implements OnInit {

  pokemons: Pokemon[] = []
  subscriptions: Subscription[] = [];

  pokemonNameSearch: string = ''

  constructor(private _pokemon: PokemonService, private _alerts: AlertsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.pokemons = await this.getPokemos();
  }

  getPokemos(): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
      const subPokemonGet = this._pokemon
        .getPokemons()
        .subscribe((resp) => {
          resolve(resp);
        });
      this.subscriptions.push(subPokemonGet);
    })
  }

  deletePokemon(pokemon: Pokemon) {
    const alert = this._alerts.sweeAletDeleteGeneric(
      'El Pokemón: '.concat(pokemon.name)
    );

    alert.then((result) => {
      if (result.value) {
        const subPokemonDelete = this._pokemon
          .deletePokemon(pokemon.id.toString())
          .subscribe({
            next: () => {
              this.loadData()
            },
            error: (err) => {
            }
          });
        this.subscriptions.push(subPokemonDelete);
      }
    })
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }
}
