import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  itemlist = [];
  randomList =[];
  defaultCards=[];
  isGame =false;


  constructor() {
    this.defaultCards = [
      {
        type:'angular',img:'../../assets/cards/angular.png'
      },
      {
        type:'d3',img:'../../assets/cards/d3.png'
      },
      {
        type:'jenkins',img:'../../assets/cards/jenkings.png'
      },
      {
        type:'postcss',img:'../../assets/cards/postcss.png'
      },
      {
        type:'react',img:'../../assets/cards/react.png'
      },
      {
        type:'redux',img:'../../assets/cards/redux.png'
      },
      {
        type:'sass',img:'../../assets/cards/sass.png'
      },
      {
        type:'splendex',img:'../../assets/cards/splendex.png'
      },
      {
        type:'ts',img:'../../assets/cards/ts.png'
      },
      {
        type:'webpack',img:'../../assets/cards/webpack.png'
      },
      ];
  }

  ngOnInit(): void {


    //feliratkozom egy obs. fgvre
  }

  fillcards(){

  }

  getRandomArbitrary(min, max, iteration) {
    return Math.floor(Math.random() * (max - min) + min);
  }

 /*  getRandomIndexes(){ //for 
    this.getRandomArbitrary(3, 10, localStorage.getItem("SelectedValue")) // kell még egy tempArray - ahova mennek a random számok.
    console.log(this.getRandomArbitrary(3, 10, localStorage.getItem("SelectedValue")));
} */

  // use localstorage
  //create service /cardService  - Obs fgv, Megadta-e a user a cardok számát, ha igen megadja
  
  createCardDeck(){
    //for megduplázza az adott arrayek genyóját
    console.log(localStorage.getItem("SelectValue"));
    for(let i=0; i<=JSON.parse(localStorage.getItem("SelectValue"))-1;i++){
      let newElements = Math.floor(Math.random() * (10 - 3) + 3);
      this.randomList.push(newElements);
      this.itemlist.push(this.defaultCards[newElements]);
      this.itemlist.push(this.defaultCards[newElements]);
      
    }
    console.log(this.randomList);
    console.log(this.itemlist);
    this.isGame =true;
    
  }

}