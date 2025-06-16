import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HomeButtonComponent } from '../../components/home-button/home-button.component';
import { ListOfPokemonComponent } from "../../components/list-of-pokemon/list-of-pokemon.component";
import { LogoutComponent } from "../../components/logout/logout.component";

interface Type {
    name: string,
    url: string
}

@Component({
    selector: 'app-list-all-pokemon-by-type',
    imports: [HomeButtonComponent, ListOfPokemonComponent, LogoutComponent],
    templateUrl: './list-all-pokemon-by-type.component.html',
    styleUrl: './list-all-pokemon-by-type.component.css'
})
export class ListAllPokemonByTypeComponent {
    constructor(private pokemonService: PokemonService) { }

    types: Type[] = []
    showPokemon = false

    // Todos los pokemons de un tipo cualquiera estan en la propiedad "pokemon"
    // de la url de cada tipo.
    getAllTypesOfPokemon() {
        this.pokemonService.getAllTypesOfPokemon().subscribe(data => {
            this.types = data.results
            console.log(this.types)
        })
    }

    ngOnInit() {
        this.getAllTypesOfPokemon()
    }

    toggleShowPokemon() {
        this.showPokemon = true
    }
}
