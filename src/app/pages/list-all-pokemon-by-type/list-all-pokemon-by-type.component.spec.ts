import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPokemonByTypeComponent } from './list-all-pokemon-by-type.component';

describe('ListAllPokemonByTypeComponent', () => {
  let component: ListAllPokemonByTypeComponent;
  let fixture: ComponentFixture<ListAllPokemonByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllPokemonByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllPokemonByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
