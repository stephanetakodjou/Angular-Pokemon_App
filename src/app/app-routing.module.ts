import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './pokemon/detail-pokemon.component';
import { ListePokemonComponent } from './pokemon/liste-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path: '',redirectTo: 'pokemons',pathMatch:'full' },
 { path: 'login', component:LoginComponent},
 { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
