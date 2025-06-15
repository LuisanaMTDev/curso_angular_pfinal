import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) { }

    getRandomPokemon(): Observable<any> {
        const randomId = (Math.floor(Math.random() * 151) + 1)
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    }

    getPokemon(url: string): Observable<any> {
        return this.http.get(url)
    }

    getAllTypesOfPokemon(): Observable<any> {
        return this.http.get('https://pokeapi.co/api/v2/type/?limit=21')
    }

    getPokemonByType(url: string): Observable<any> {
        return this.http.get(url)
    }

    getPokemonByName(name: string): Observable<any> {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }
}
