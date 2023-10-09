import { Component } from '@angular/core';

declare var $:any;
declare function HOMEINIT([]):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  constructor()
  {
    setTimeout(() => {
      HOMEINIT($);
    }, 50);
  }
}
