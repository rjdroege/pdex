import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdex',
  templateUrl: './pdex.component.html',
  styleUrls: ['./pdex.component.css']
})
export class PdexComponent implements OnInit {
finalArray= [];
savedArray= [];
userArray= [];
descObj = []

  constructor(private http: HttpClient){ }

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
    pokeClickId(idx: number) {
      const thisPoke: string = this.finalArray[idx].name;
      this.http.get<{}>(`https://pokeapi.co/api/v2/pokemon/${thisPoke}`).subscribe((res) => {
        const allPokes = Object.assign(res);
        const apiPokesArray = Object.entries(allPokes);
         this.descObj = apiPokesArray
      })
      console.log(this.descObj)
      this.pokeDescSort()
    }

    savePoke(idx: number) {
      this.userArray = this.savedArray[idx];
    }

    deletePoke(idx: number) {
      this.userArray = [];
    }

   //sort through api data and returns it
   pokeDescSort(){
    let help = Object.values(this.descObj[0][1][0])
    let help2 = Object.values(help[0])
    console.log(help2[0])
   }

}
