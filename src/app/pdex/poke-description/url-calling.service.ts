import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { PdexComponent } from '../pdex.component';

@Injectable({
  providedIn: 'root'
})
export class UrlCallingService {
  //holds the url for the click on the left side
  @Output() url = this.pokeUrl.currUrl

  constructor(private pokeUrl:PdexComponent, private http:HttpClient) { }

  getPokemon() {
    this.http.get<{}>( this.url ).subscribe((pokes) => {
      const allPokes = Object.assign(pokes);
      const apiPokesArray = Object.entries(allPokes);

      return apiPokesArray;
    });
  }
}
