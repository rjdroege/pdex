import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved-poke',
  templateUrl: './saved-poke.component.html',
  styleUrls: ['./saved-poke.component.css']
})
export class SavedPokeComponent implements OnInit {
  pokeSub: Subscription;
  myPoke = [];

  constructor() { }

  ngOnInit(): void {
  }

}
