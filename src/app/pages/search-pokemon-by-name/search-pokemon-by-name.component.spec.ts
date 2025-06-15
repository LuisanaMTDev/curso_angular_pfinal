import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonByNameComponent } from './search-pokemon-by-name.component';

describe('SearchPokemonByNameComponent', () => {
  let component: SearchPokemonByNameComponent;
  let fixture: ComponentFixture<SearchPokemonByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPokemonByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokemonByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
