import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GetRandomPokemonComponent } from './pages/get-random-pokemon/get-random-pokemon.component';
import { ListAllPokemonByTypeComponent } from './pages/list-all-pokemon-by-type/list-all-pokemon-by-type.component';
import { SearchPokemonByNameComponent } from './pages/search-pokemon-by-name/search-pokemon-by-name.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'get-random-pokemon', component: GetRandomPokemonComponent },
    { path: 'list-all-pokemon-by-type', component: ListAllPokemonByTypeComponent },
    { path: 'search-pokemon-by-name', component: SearchPokemonByNameComponent }
];
