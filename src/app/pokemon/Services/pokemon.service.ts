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

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.URL_API}/?idAuthor=1`);
  }
}
