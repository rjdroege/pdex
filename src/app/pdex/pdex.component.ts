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
    this.http.get<{}>('https://pokeapi.co/api/v2/pokemon/').subscribe((res) => {
      console.log(res);
    });
  }

}
