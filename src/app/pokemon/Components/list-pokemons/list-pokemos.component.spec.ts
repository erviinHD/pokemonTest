import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemosComponent } from './list-pokemos.component';

describe('ListPokemosComponent', () => {
  let component: ListPokemosComponent;
  let fixture: ComponentFixture<ListPokemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
