import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuththenticated = false;
  private userSub: Subscription;

  constructor() { }



  ngOnInit(): void {}
  ngOnDestroy(): void {}

}
