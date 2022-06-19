import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavDataService } from '../shared/fav-data.service';

@Component({
  selector: 'app-fav-pokemon',
  templateUrl: './fav-pokemon.component.html',
  styleUrls: ['./fav-pokemon.component.css']
})
export class FavPokemonComponent implements OnInit {


savedArray= [];
userArray= [];
descObj = [];
descData = {
  "abilities":[],
  "height":[],
  "name":[],
  "types":[],
  "weight":[],
  "sprite":[]
};



favList = new Array

  constructor(private http: HttpClient, private favArry:FavDataService){ }

  ngOnInit(): void {
    this.favArry.saveInput(null)
    this.arryCall()

    console.log(this.favArry.mainArry)

  }



  //finds the url for click
   pokeClickId(idx: number) {
      const thisPoke: string = this.favList[idx];
       this.http.get<{}>(`https://pokeapi.co/api/v2/pokemon/${thisPoke}`).subscribe((res) => {
        const allPokes = Object.assign(res);
        const apiPokesArray = Object.entries(allPokes);
         this.descObj = apiPokesArray
         this.mainDescCall()
      })
    }



//general call to all description functions for click
    mainDescCall(){
      this.pokeDescSortAbilities()
      this.pokeDescSortTypes()
      this.pokeDescSortSprite()
      this.pokeDescSortWNH(4,"height")
      this.pokeDescSortWNH(10,"name")
      this.pokeDescSortWNH(17,"weight")
    }

   pokeDescSortAbilities(){     //sort through api data and returns it for abilities
    let abilArry = []           //array we push to descData

    if(this.descObj[0].length === 3){     //sees if pokemon descObj has two abilites or not
      //makes {abil1} an a []
    let abil1 = Object.entries(this.descObj[0][1][0])
    let abil1NameObj = Object.entries(abil1)
    let abil1Name = Object.entries(abil1NameObj[0][1][1])

    abilArry.push(abil1Name[0][1])    //pushes to abilArry

      //makes {abil2} an a []
    let abil2 = Object.entries(this.descObj[0][1][1])
    let abil2NameObj = Object.entries(abil2)
    let abil2Name = Object.values(abil2NameObj[0][1][1])

    abilArry.push(abil2Name[0])   //pushing second ability name

    this.descData.abilities = abilArry     //setting array with values in it into descData
    }
    else{
        //makes {abil1} an a []
      let abil1 = Object.entries(this.descObj[0][1][0])
      let abil1NameObj = Object.entries(abil1)
      let abil1Name = Object.entries(abil1NameObj[0][1][1])

      abilArry.push(abil1Name[0][1])    //pushing first ability name

      this.descData.abilities = abilArry    //setting array with values in it into descData
    }
   }

  pokeDescSortTypes(){      //sort through api data and returns it for types

    let typeArry = []     //array we push to descData

    if(this.descObj[16][1].length === 2){     //if statement to check the amount of types
      //makes {type1} an a []
    let type1 = Object.entries(this.descObj[16][1][0]);
    let type1NameObj = Object.entries(type1[1])
    let type1Name = Object.entries(type1NameObj[1][1])

    typeArry.push(type1Name[0][1])       //pushing type1Name into typeArry

      //makes {type2} an a []
    let type2 = Object.entries(this.descObj[16][1][1])
    let type2NameObj = Object.entries(type2[1])

    let type2Name = Object.values(type2NameObj[1][1])     //pushing type2Name into typeArry

    typeArry.push(type2Name[0])

    this.descData.types = typeArry      //setting array with values in it into descData
    }
    else{
       //makes {type1} an a []
       let type1 = Object.entries(this.descObj[16][1][0])
       let type1NameObj = Object.entries(type1[1])
       let type1Name = Object.entries(type1NameObj[1][1])


       typeArry.push(type1Name[0][1])     //pushing type1Name into typeArry

      this.descData.types = typeArry      //setting array with values in it into descData
    }
    }

    pokeDescSortSprite(){
      let spriteArry = new Array      //creates an empty array to push the link into due to type issue
      let obj = Object.entries(this.descObj[14][1])
      let spriteNameObj = Object.entries(obj[8][1])
      let spriteLink = Object.entries(spriteNameObj[2][1])

      spriteArry.push(spriteLink[0][1])     //string that is pushed into array
      this.descData.sprite = spriteArry     //setting array equal to sprite catagory
    }


   //Sorts weight,name,and height
   pokeDescSortWNH(num: number, categorie:string){
    let obj = Object.entries(this.descObj[num])
    let value = Object.values(obj[1])

    this.descData[categorie] = value[1]
   }

   onRemove(idx){
    this.favArry.deleteFavPoke(idx)
    console.log(idx)
  }

  arryCall(){
  let string = this.favArry.mainArry.join()
  this.favList = string.split(",")
  console.log(this.favList)
  }
}
