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

  pokemon: Pokemon = { attack: 0, defense: 0, hp: 0, idAuthor: 1, image: '', name: '', type: '', id: 1 }

  pokemonNameSearch: string = ''
  isOpen: boolean = false;
  isEdit: boolean = false;

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
      attack: [50, Validators.required],
      defense: [50, Validators.required],
      hp: 100,
      type: "normal",
      idAuthor: 1
    });
  }

  setDataForm() {
    this.formPokemon.controls['name'].setValue(this.pokemon.name);
    this.formPokemon.controls['image'].setValue(this.pokemon.image);
    this.formPokemon.controls['attack'].setValue(this.pokemon.attack);
    this.formPokemon.controls['defense'].setValue(this.pokemon.defense);
    this.formPokemon.controls['hp'].setValue(100);
    this.formPokemon.controls['type'].setValue("normal");
    this.formPokemon.controls['idAuthor'].setValue(1);
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

  getPokemonById(idPokemon: string) {
    this.isEdit = true;
    this.isOpen = true;
    this.formPokemon.reset()

    const subPokemonGetById = this._pokemon
      .getPokemonById(idPokemon)
      .subscribe({
        next: (resp) => {
          this.pokemon = resp;
        }, complete: () => {
          this.setDataForm()
        }
      });
    this.subscriptions.push(subPokemonGetById);
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

  updatePokemon() {
    if (this.formPokemon.valid) {
      return new Promise((resolve, rejects) => {
        const subPokemonPost = this._pokemon.putPokemon(this.pokemon.id.toString(), this.formPokemon.value)
          .subscribe((resp) => {
            resolve(resp)
            this.loadData()
            this.clearForm()
          })
        this.subscriptions.push(subPokemonPost)
      })
    }
  }


  // Forms validators
  clearForm() {
    this.isOpen = !this.isOpen
    this.isEdit = false
    this.formPokemon.controls['name'].reset();
    this.formPokemon.controls['image'].reset();
    this.formPokemon.controls['attack'].setValue(50);
    this.formPokemon.controls['defense'].setValue(50);
    this.formPokemon.controls['hp'].setValue(100);
    this.formPokemon.controls['type'].setValue("normal");
    this.formPokemon.controls['idAuthor'].setValue(1);
  }

  inputIsValid(field: string) {
    return this.formPokemon.controls[field].errors &&
      this.formPokemon.controls[field].touched
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }
}
