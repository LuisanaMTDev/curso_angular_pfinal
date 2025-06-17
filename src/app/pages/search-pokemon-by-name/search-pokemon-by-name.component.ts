import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    selector: 'app-search-pokemon-by-name',
    imports: [FormsModule, HomeButtonComponent, LogoutComponent],
    templateUrl: './search-pokemon-by-name.component.html',
    styleUrl: './search-pokemon-by-name.component.css'
})
export class SearchPokemonByNameComponent {
    constructor(private pokemonService: PokemonService) { }
    name: string = ''
    altForOfficialArt: string = ''
    pokemonOfficialArt: string = ''
    pokemonName: string = ''
    abilities: Ability[] = []
    type: string = ''

    getPokemon() {
        this.pokemonService.getPokemonByName(this.name.toLowerCase()).subscribe(data => {
            this.pokemonName = data.name
            this.altForOfficialArt = `Arte oficial de ${this.pokemonName}`
            this.pokemonOfficialArt = data.sprites.front_default
            this.abilities = data.abilities
            this.type = data.types[0].type.name
        })
    }
}
