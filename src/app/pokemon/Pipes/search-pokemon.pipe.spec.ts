import { SearchPokemonPipe } from './search-pokemon.pipe';

describe('SearchPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPokemonPipe();
    expect(pipe).toBeTruthy();
  });
});

it('find elements', () => {
  const pipe = new SearchPokemonPipe();
  const dummyPokemon = [
    {
      "id": 3903,
      "name": "Raichu",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      "attack": 73,
      "defense": 58,
      "hp": 100,
      "type": "normal",
      "id_author": 1
    },
    {
      "id": 3964,
      "name": "Pikachu",
      "image": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png",
      "attack": 68,
      "defense": 100,
      "hp": 100,
      "type": "normal",
      "id_author": 1
    },
    {
      "id": 3971,
      "name": "Dragonite",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      "attack": 72,
      "defense": 80,
      "hp": 100,
      "type": "normal",
      "id_author": 1
    }
  ]
  let value = dummyPokemon;
  let arg = 'Dragonite'
  expect(pipe.transform(value, arg)).toContain(dummyPokemon[2]);
});
