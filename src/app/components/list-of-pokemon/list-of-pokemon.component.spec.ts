import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPokemonComponent } from './list-of-pokemon.component';

describe('ListOfPokemonComponent', () => {
  let component: ListOfPokemonComponent;
  let fixture: ComponentFixture<ListOfPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
