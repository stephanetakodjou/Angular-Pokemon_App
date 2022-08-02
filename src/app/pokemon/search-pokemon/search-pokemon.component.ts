import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  
  searchTerms = new Subject<string>();  //represente un flux de donnée dans le temps avec les recherches de l'utilisateur 


  pokemon$: Observable<Pokemon[]>;

  constructor( private router : Router,
              private pokemonService : PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemon$= this.searchTerms.pipe(
      // {..."a". "ab"..."abz"."ab"..."abc"....}
        debounceTime(300),
      // {.... "ab"....."ab"..."abc"....}
        distinctUntilChanged(),
      // {.... "ab"........."abc"....}
      switchMap((researchTerm)=>this.pokemonService.searchPokemonList(researchTerm))



      );
  }

  search(researchTerm: string ){
    this.searchTerms.next(researchTerm);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
