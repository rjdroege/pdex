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
descObj = [];
descData = {
  "abilities":[],
  "height":[],
  "name":[],
  "types":[],
  "weight":[]
};
descArry = [];

url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

nextUrl:any = '';

prevUrl:any = '';

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.getPokemon();
    // this.prevUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
  }

  // getPokemon() {
  //   this.http.get<{}>('https://pokeapi.co/api/v2/pokemon/heracross-mega').subscribe((pokes) => {
  //     const allPokes = Object.assign(pokes);
  //     const apiPokesArray = Object.entries(allPokes);
  //     const pokesArray: any = apiPokesArray[3][1];
  //     console.log
  //   });
  // }

  getPokemon() {
    this.http.get<{}>(this.url).subscribe((pokes) => {
      const allPokes = Object.assign(pokes);
      const apiPokesArray = Object.entries(allPokes);
      const pokesArray: any = apiPokesArray[3][1];
      this.finalArray = pokesArray
      this.nextUrl = apiPokesArray[1][1]
      this.prevUrl = apiPokesArray[2][1]
      console.log(apiPokesArray[2])
    });
  }

  nextBtn(){
    this.url = this.nextUrl
    this.getPokemon()
  }

  prevBtn(){
    this.url = this.prevUrl
    this.getPokemon()
  }

  //finds the url for click
   pokeClickId(idx: number) {
      const thisPoke: string = this.finalArray[idx].name;
       this.http.get<{}>(`https://pokeapi.co/api/v2/pokemon/${thisPoke}`).subscribe((res) => {
        const allPokes = Object.assign(res);
        const apiPokesArray = Object.entries(allPokes);
         this.descObj = apiPokesArray
         this.mainDescCall()
         console.log(this.descData)
      })
    }

    savePoke(idx: number) {
      this.userArray = this.savedArray[idx];
    }

    deletePoke(idx: number) {
      this.userArray = [];
    }
//general call to all description functions for click
    mainDescCall(){
      this.pokeDescSortAbilities()
      this.pokeDescSortTypes()
      this.pokeDescSortWNH(4,"height")
      this.pokeDescSortWNH(10, "name")
      this.pokeDescSortWNH(17, "weight")
    }

   //sort through api data and returns it for abilities
   pokeDescSortAbilities(){
    //array we push to descData
    let abilArry = []
    //if statement to catch the number of abilites might have to change soon
    console.log(this.descObj[0])
    if(this.descObj[0].length === 2){
      //first ability to be pushed
    let abil1 = Object.entries(this.descObj[0][1][0])
    let abil1NameObj = Object.entries(abil1)
    let abil1Name = Object.entries(abil1NameObj[0][1][1])
      //pushing first ability name
    abilArry.push(abil1Name[0][1])

      //first ability to be pushed
    let abil2 = Object.entries(this.descObj[0][1][1])
    let abil2NameObj = Object.entries(abil2)
    let abil2Name = Object.values(abil2NameObj[0][1][1])
      //pushing first ability name
    abilArry.push(abil2Name[0])
      //setting array with values in it into descData
    this.descData.abilities = abilArry
    }
    else{
        //first ability to be pushed
      let abil1 = Object.entries(this.descObj[0][1][0])
      let abil1NameObj = Object.entries(abil1)
      let abil1Name = Object.entries(abil1NameObj[0][1][1])
        //pushing first ability name
      abilArry.push(abil1Name[0][1])
        //setting array with values in it into descData
      this.descData.abilities = abilArry
    }
   }



  //sort through api data and returns it for abilities
  pokeDescSortTypes(){
    //array we push to descData
    let typeArry = []
    //if statement to catch the number of abilites might have to change soon
    if(this.descObj[16][1].length === 2){
      //first ability to be pushed
    let type1 = Object.entries(this.descObj[16][1][0]);

    let type1NameObj = Object.entries(type1[1])

    let type1Name = Object.entries(type1NameObj[1][1])
      //pushing first ability name
    typeArry.push(type1Name[0][1])

      //second ability to be pushed
    let type2 = Object.entries(this.descObj[16][1][1])
    let type2NameObj = Object.entries(type2[1])

    let type2Name = Object.values(type2NameObj[1][1])
      //pushing first ability name

    typeArry.push(type2Name[0])
      //setting array with values in it into descData
    this.descData.types = typeArry
    }
    else{
       //first ability to be pushed
       console.log(this.descObj[16][1][0])
       let type1 = Object.entries(this.descObj[16][1][0]);

       let type1NameObj = Object.entries(type1[1])

       let type1Name = Object.entries(type1NameObj[1][1])
         //pushing first ability name
       typeArry.push(type1Name[0][1])

      this.descData.types = typeArry
    }
    }


   //Sorts weight,name, and height
   pokeDescSortWNH(num: number, properties:string){
    let Obj = Object.entries(this.descObj[num])

    let value = Object.values(Obj[1])

    this.descData[properties] = value[1]
   }
}
