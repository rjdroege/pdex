import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdex',
  templateUrl: './pdex.component.html',
  styleUrls: ['./pdex.component.css']
})
export class PdexComponent implements OnInit {
finalArray= [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.http.get<{}>('https://pokeapi.co/api/v2/pokemon/').subscribe((pokes) => {
      const allPokes = Object.assign(pokes);
      const pokesArray = Object.entries(allPokes);
      const apiPokes: any = pokesArray[3];
      this.finalArray = apiPokes[1];
      console.log(this.finalArray);
    });
  }

}
