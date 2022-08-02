import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: '../liste-pokemon/liste-pokemon.component.html',

})
export class ListePokemonComponent implements OnInit {

  constructor(private router: Router,
        private pokemonService :PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList= pokemonList);
  }

  pokemonList: Pokemon[]  ;

  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
