import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Pokemon } from "./pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PdexService {
  constructor(private http: HttpClient){}

  savedPoke = new Subject();
  allPokes = new Subject();


  allPokemon = [];
  myPoke = [];

  getPokemon() {
    this.http.get<{}>('https://pokeapi.co/api/v2/pokemon').subscribe((pokes) => {
      const allPokes = Object.assign(pokes);
      const apiPokesArray = Object.entries(allPokes);
      const pokesArray: any = apiPokesArray[3][1];
      pokesArray.forEach(poke => {
        let allPokes = new Pokemon(
          poke.name,
          poke.url
        );
        this.allPokemon.push(allPokes);
      });
      this.allPokes.next(this.allPokemon.slice());
    });
  }

  savePokemon(i: number) {

  }


}
