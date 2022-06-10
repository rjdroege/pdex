import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlCallingService } from './poke-description/url-calling.service';

@Component({
  selector: 'app-pdex',
  templateUrl: './pdex.component.html',
  styleUrls: ['./pdex.component.css']
})
export class PdexComponent implements OnInit {
finalArray= [];

@Input() currUrl:string = "";


  constructor(private http: HttpClient ,private descrptionS: UrlCallingService){ }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.http.get<{}>('https://pokeapi.co/api/v2/pokemon/').subscribe((pokes) => {
      const allPokes = Object.assign(pokes);
      const apiPokesArray = Object.entries(allPokes);
      const pokesArray: any = apiPokesArray[3][1];
      this.finalArray = pokesArray
      console.log(this.finalArray)
    });
  }
  //finds the url for click
  pokeClickId(url: string){
    this.currUrl = url
    this.descrptionS.url = this.currUrl
  }
//hello
}
