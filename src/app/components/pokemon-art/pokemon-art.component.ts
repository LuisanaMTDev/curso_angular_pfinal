import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-pokemon-art',
    imports: [],
    templateUrl: './pokemon-art.component.html',
    styleUrl: './pokemon-art.component.css'
})
export class PokemonArtComponent {
    constructor(private pokemonService: PokemonService) { }

    @Input() pokemonUrl: string = ''
    pokemonOfficialArt: string = ''

    getPokemonOfficialArt() {
        this.pokemonService.getPokemon(this.pokemonUrl).subscribe(data => {
            this.pokemonOfficialArt = data.sprites.front_default
        })
    }

    ngOnInit() {
        this.getPokemonOfficialArt()
    }
}
