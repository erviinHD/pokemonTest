import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../Interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  deletePokemon(idPokemon: string): Observable<any> {
    return this.http.delete<any>(`${this.URL_API}/${idPokemon}`);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.URL_API}/?idAuthor=1`);
  }

  getPokemonById(idPokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.URL_API}/${idPokemon}`);
  }

  postPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.URL_API}/?idAuthor=1`, pokemon);
  }

  putPokemon(idPokemon: string, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.URL_API}/${idPokemon}`, pokemon);
  }


}
