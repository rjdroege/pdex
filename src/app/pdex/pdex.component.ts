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
      this.mainDescCall()
    }

    savePoke(idx: number) {
      this.userArray = this.savedArray[idx];
    }

    deletePoke(idx: number) {
      this.userArray = [];
    }
//general call to all description functions for click
    mainDescCall(){
      //this.pokeDescSortAbilities()
      //this.pokeDescSortHeight()
      //this.pokeDescSortName()
      this.pokeDescSortTypes()
      //this.pokeDescSortWeight()
      //this.descArry = Object.entries(this.descData)
      //console.log(this.descArry)
    }

   //sort through api data and returns it for abilities
   pokeDescSortAbilities(){
    //array we push to descData
    let abilArry = []
    //if statement to catch the number of abilites might have to change soon
    if(this.descObj[0][1].length = 2){
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
    if(this.descObj[16][1].length = 2){
      //first ability to be pushed
    let abil1 = Object.entries(this.descObj[16][1][0]);
    console.log(abil1)
    let abil1NameObj = Object.entries(abil1[1])
    console.log(abil1NameObj)
    let abil1Name = Object.entries(abil1NameObj[1][1])
    console.log(abil1Name)
      //pushing first ability name
    typeArry.push(abil1Name[0][1])

      //second ability to be pushed
    let abil2 = Object.entries(this.descObj[16][1][1])
    let abil2NameObj = Object.entries(abil2[1])
    console.log(abil2NameObj)
    let abil2Name = Object.values(abil2NameObj[1][1])
      //pushing first ability name

    typeArry.push(abil2Name[0])
      //setting array with values in it into descData
    this.descData.types = typeArry
    }
    else{
        //first ability to be pushed
      let abil1 = Object.entries(this.descObj[16][1][0])
      let abil1NameObj = Object.entries(abil1)
      let abil1Name = Object.entries(abil1NameObj[0][1][1])
        //pushing first ability name
      typeArry.push(abil1Name[0][1])
        //setting array with values in it into descData
      // this.descData.types = typeArry
      console.log(typeArry)
    }
    }
//can combine height and name by using parameters

   //finds height from api call and puts it into descData
   pokeDescSortHeight(){
    //finds height from array and makes some objects arrays
    let heightObj = Object.entries(this.descObj[4])
    let height = Object.values(heightObj[1])
    //pushes height to descData height
    this.descData.height.push(height[1])
   }
//want to combine height and name code since so simmilar
   pokeDescSortName(){
    let nameObj = Object.entries(this.descObj[10])

    let name = Object.values(nameObj[1])

    this.descData.name.push(name[1])
   }

   //want to combine height and name code since so simmilar
   pokeDescSortWeight(){
    let weightObj = Object.entries(this.descObj[17])

    let weight = Object.values(weightObj[1])

    this.descData.weight.push(weight[1])

    console.log(this.descData)
   }
}
