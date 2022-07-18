import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavDataService {

  constructor() { }
  mainArry:string[] = [];




  storedArryGet = JSON.parse(localStorage.getItem("pokedexLocalArray"))


  callStorage(){
    if(this.storedArryGet === null){
      this.mainArry == [];
      localStorage.setItem("pokedexLocalArray",JSON.stringify(this.mainArry))
    }else{
    this.mainArry = this.storedArryGet
    localStorage.setItem("pokedexLocalArray",JSON.stringify(this.mainArry))
    }}

    saveInput(idx) {
      if(this.mainArry.length === 0) {
        this.mainArry.push(idx);
        this.callStorage();
        return
      }else{
      let clear = true;
      this.mainArry.forEach((i) => {
        if (i === idx) {
          clear = false;
        }});
      if (clear) {
        this.mainArry.push(idx);
        return
        } else {
          console.log("Joke Saved")
        }}
      localStorage.setItem("pokedexLocalArray",JSON.stringify(this.mainArry))
      return
    }

    deleteFavPoke(idx){
      this.mainArry.splice(idx,1)
      localStorage.setItem("pokedexLocalArray",JSON.stringify(this.mainArry))
      return
    }
}

