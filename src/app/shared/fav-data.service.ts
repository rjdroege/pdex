import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavDataService {

  constructor() { }
  mainArry = [];




  storedArryGet = JSON.parse(localStorage.getItem("mainArray"))


  callStorage(){
    this.mainArry = this.storedArryGet
  }

  saveInput(idx) {
    if(this.mainArry.length === 0) {
      localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
      this.mainArry.push(idx);
      console.log(this.mainArry)
      return
    }else{
    let clear = true;
    this.mainArry.forEach((i) => {
      if (i === idx) {
        clear = false;
      }
    });
    if (clear) {
      this.mainArry.push(idx);
      return
      } else {
       console.log('You already liked that Joke!')

      }}
    localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
    return
  }

 deleteFavPoke(idx){
    let string  = this.mainArry.toString()
    let array = string.split(",")
    let array2 = array.filter(function(data){return data != idx})
    this.mainArry = array2
    localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
    return
 }
}

