import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRandomPokemonComponent } from './get-random-pokemon.component';

describe('GetRandomPokemonComponent', () => {
  let component: GetRandomPokemonComponent;
  let fixture: ComponentFixture<GetRandomPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRandomPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRandomPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
