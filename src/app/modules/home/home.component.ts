import { Component } from '@angular/core';

declare var $:any;
declare function HOMEINIT([]):any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor()
  {
    setTimeout(() => {
      HOMEINIT($);
    }, 50);
  }
}
