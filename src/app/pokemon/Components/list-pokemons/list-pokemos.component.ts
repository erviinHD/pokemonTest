import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';

import { Subscription } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-pokemos',
  templateUrl: './list-pokemos.component.html',
  styleUrls: ['./list-pokemos.component.css']
})
export class ListPokemosComponent implements OnInit {

  pokemons: Pokemon[] = []
  subscriptions: Subscription[] = [];

  pokemonNameSearch: string = ''
  isOpen: boolean = false;

  formPokemon: FormGroup;

  constructor(
    private _pokemon: PokemonService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.initForm()
  }

  initForm() {
    this.formPokemon = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      attack: [0, Validators.required],
      defense: [0, Validators.required],
      hp: 100,
      type: "normal",
      idAuthor: 1
    });
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

  createPokemon() {
    if (this.formPokemon.valid) {
      return new Promise((resolve, rejects) => {
        const subPokemonPost = this._pokemon.postPokemon(this.formPokemon.value)
          .subscribe((resp) => {
            resolve(resp)
            this.loadData()
            this.clearForm()
          })
        this.subscriptions.push(subPokemonPost)
      })
      
    }
  }

  clearForm() {
    this.isOpen = !this.isOpen
    this.formPokemon.reset()
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }
}
