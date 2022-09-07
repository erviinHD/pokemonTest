import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PokemonService } from '../../services/pokemon.service';

import { ListPokemosComponent } from './list-pokemos.component';

describe('ListPokemosComponent', () => {
  let component: ListPokemosComponent;
  let fixture: ComponentFixture<ListPokemosComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPokemosComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers: [PokemonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemosComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httMock = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
    compiled = fixture.nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('view title pokemon', () => {
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('Listado de Pokemon')
  });

  it('view pokemons', () => {
    const api = environment.URL_API
    const dummyPokemon =
    
      {
          "id": 3903,
          "name": "Raichu",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
          "attack": 73,
          "defense": 58,
          "hp": 100,
          "type": "normal",
          "id_author": 1
      }
  
    const request = httMock.expectOne(`${api}/?idAuthor=1`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);
    fixture.detectChanges();    
  });

});
