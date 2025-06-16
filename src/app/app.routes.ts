import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core'
import { MainComponent } from './pages/main/main.component';
import { GetRandomPokemonComponent } from './pages/get-random-pokemon/get-random-pokemon.component';
import { ListAllPokemonByTypeComponent } from './pages/list-all-pokemon-by-type/list-all-pokemon-by-type.component';
import { SearchPokemonByNameComponent } from './pages/search-pokemon-by-name/search-pokemon-by-name.component';

const authGuard = (route: any, state: any) => {
    const router = inject(Router)

    if (window.localStorage.getItem('user')) {
        return true
    }

    router.navigate([''])
    return false
}

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'get-random-pokemon',
        component: GetRandomPokemonComponent,
        canActivate: [authGuard]
    },
    {
        path: 'list-all-pokemon-by-type',
        component: ListAllPokemonByTypeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'search-pokemon-by-name',
        component: SearchPokemonByNameComponent,
        canActivate: [authGuard]
    }
];
