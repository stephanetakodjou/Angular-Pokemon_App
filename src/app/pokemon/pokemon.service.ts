import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService {

  constructor( private http : HttpClient) { }

  getPokemonList() : Observable<Pokemon[]>{
    // return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response)=>this.log(response)), //equivalent d'un console.log pour les Observable
        catchError((error)=> this.handleError(error, undefined)
        )
      )

  }

  getPokemonById (pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response)), //equivalent d'un console.log pour les Observable
      catchError((error)=>this.handleError(error,[]))
    )
  }

  

  searchPokemonList(researchTerm : string) : Observable<Pokemon[]>{

    if (researchTerm.length <= 2) {
      return of ([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${researchTerm}`).pipe(
      tap((response)=>this.log(response)), //equivalent d'un console.log pour les Observable
      catchError((error)=>this.handleError(error,[]))
      )
  }

  addPokemon(pokemon : Pokemon ): Observable<Pokemon>{
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'}) 
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOption).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, null))
      )
  }

  updatePokemon(pokemon : Pokemon): Observable<null>{
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'}) 
    };

    return this.http.put('api/pokemons',pokemon , httpOption).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=>this.handleError(error, null))
      );
  }

  deletePokemonById(pokemonId : number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, null))
      )
  }

  private  log (response : any){
    console.table(response );
  }

  private handleError(error : Error, errorValue: any){
    console.error(error);
    return of (errorValue);
  }

  getPokemonTypeList(): string[]{
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Electrik",
      "Poisson",
      "Fée",
      "Normal",
      "Vol",
      "Combat",
      "Psy"
    ]
  
  }
}
