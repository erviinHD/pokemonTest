import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  it('get information pokemon with id 3903', (done) => {
    service.getPokemonById('3903').subscribe(pokemon => {
      expect(pokemon.name).toBe('Raichu');
      done();
    })
  });

  it('get pokemons', (done) => {
    const onePokemon = {
      attack: 73,
      defense: 58,
      hp: 100,
      id: 3903,
      id_author: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      name: "Raichu",
      type: "normal"
    }
    service.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      expect(pokemons[0].image).toBe(onePokemon.image);
      done();
    })
  });
});
