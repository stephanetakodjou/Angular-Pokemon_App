import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePokemonComponent } from './liste-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';


const pokemonroute: Routes = [
  { path : 'pokemon/add', component : AddPokemonComponent , canActivate : [AuthGuard] },
  { path : 'edit/pokemon/:id', component: EditPokemonComponent, canActivate : [AuthGuard]},
 { path: 'pokemons', component: ListePokemonComponent , canActivate : [AuthGuard] },
 { path: 'pokemon/:id', component: DetailPokemonComponent , canActivate : [AuthGuard] }
];

@NgModule({
  declarations: [
    ListePokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroute)
  ],
  providers: [
    PokemonService
  ]
})

export class PokemonModule { }
