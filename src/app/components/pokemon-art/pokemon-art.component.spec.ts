import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonArtComponent } from './pokemon-art.component';

describe('PokemonArtComponent', () => {
  let component: PokemonArtComponent;
  let fixture: ComponentFixture<PokemonArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
