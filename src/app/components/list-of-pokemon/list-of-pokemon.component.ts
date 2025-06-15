import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonArtComponent } from '../pokemon-art/pokemon-art.component';
interface Pokemon {
    name: string,
    url: string
}

interface PokemonListInfo {
    pokemon: Pokemon,
    slot: string
}

@Component({
    selector: 'app-list-of-pokemon',
    imports: [PokemonArtComponent],
    templateUrl: './list-of-pokemon.component.html',
    styleUrl: './list-of-pokemon.component.css'
})
export class ListOfPokemonComponent {
    constructor(private pokemonService: PokemonService) { }

    @Input() pokemonListUrl = ''
    listOfPokemon: PokemonListInfo[] = []

    getPokemonByType() {
        this.pokemonService.getPokemonByType(this.pokemonListUrl).subscribe(data => {
            this.listOfPokemon = data.pokemon
        })
    }

    ngOnInit() {
        this.getPokemonByType()
    }
}
