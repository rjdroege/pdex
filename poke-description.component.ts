import { Component, OnInit } from '@angular/core';
import { UrlCallingService } from './url-calling.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.css']
})
export class PokeDescriptionComponent implements OnInit {

  constructor(private urlService:UrlCallingService) { }

  ngOnInit(): void {
    // console.log(this.urlService.getPokemon())
  }

}
