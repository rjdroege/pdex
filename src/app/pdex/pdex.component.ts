import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/pdex/pokemon.model';

@Component({
  selector: 'app-pdex',
  templateUrl: './pdex.component.html',
  styleUrls: ['./pdex.component.css']
})
export class PdexComponent implements OnInit {
finalArray= [];
savedArray= [];
savedPoke = new Subject();
sub: Subscription;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon();
  }

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
        this.finalArray.push(allPokes);
      });
    });
  }

  savePokes(i: number) {
    this.savedArray.push(this.finalArray[i]);
    console.log(this.savedArray);
  }

}
