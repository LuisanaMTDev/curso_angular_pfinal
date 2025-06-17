import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HomeButtonComponent } from "../../components/home-button/home-button.component";
import { LogoutComponent } from "../../components/logout/logout.component";

interface AbilityDetails {
  name: string,
  url: string
}

interface Ability {
  ability: AbilityDetails,
  is_hidden: boolean,
  slot: number
}

@Component({
  selector: 'app-get-random-pokemon',
  imports: [HomeButtonComponent, LogoutComponent],
  templateUrl: './get-random-pokemon.component.html',
  styleUrl: './get-random-pokemon.component.css'
})
export class GetRandomPokemonComponent {
  constructor(private pokemonService: PokemonService) { }

  name: string = ''
  officialArt: string = ''
  altForOfficialArt: string = `Arte oficial de ${this.name}`
  abilities: Ability[] = []
  type: string = ''

  getRandomPokemon() {
    this.pokemonService.getRandomPokemon().subscribe(data => {
      console.log(data);

      this.name = data.name
      this.officialArt = data.sprites.front_default
      this.abilities = data.abilities
      this.type = data.types[0].type.name
    })
  }

  ngOnInit() {
    this.getRandomPokemon()
  }
}
