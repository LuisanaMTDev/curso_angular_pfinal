import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { HomeButtonComponent } from "../../components/home-button/home-button.component";
import { LogoutComponent } from "../../components/logout/logout.component";

@Component({
    selector: 'app-search-pokemon-by-name',
    imports: [FormsModule, HomeButtonComponent, LogoutComponent],
    templateUrl: './search-pokemon-by-name.component.html',
    styleUrl: './search-pokemon-by-name.component.css'
})
export class SearchPokemonByNameComponent {
    constructor(private pokemonService: PokemonService) { }
    name: string = ''
    pokemonOfficialArt: string = ''
    pokemonName: string = ''

    getPokemon() {
        this.pokemonService.getPokemonByName(this.name).subscribe(data => {
            this.pokemonName = data.name
            this.pokemonOfficialArt = data.sprites.front_default
        })
    }
}
