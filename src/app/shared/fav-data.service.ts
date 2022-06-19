import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavDataService {

  constructor() { }
  mainArry = [];




  storedArryGet = JSON.parse(localStorage.getItem("mainArray"))


  // callStorage(){
  //   this.mainArry = this.storedArryGet
  // }
  saveInput(idx) {
    if(idx === null){
      this.mainArry = this.storedArryGet
      console.log("works")
      return
    }
    else if(this.mainArry.length === 0) {
      this.mainArry = this.storedArryGet
      this.mainArry.push(idx);
      localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
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
      localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
      return
      } else {
       console.log('You already liked that Joke!')
       return
      }
  }}

 deleteFavPoke(idx){
    let string  = this.mainArry.toString()
    let array = string.split(",")
    let array2 = array.filter(data =>
       data = idx);
       console.log(array2)
    this.mainArry = array2
    console.log(this.mainArry)
    localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
    return
 }
}

