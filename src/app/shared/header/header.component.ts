import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  activedToggle:Boolean = false;
  logo:string = 'assets/images/logo/logo.png';
  constructor()
  {}

  ngOnInit()
  {

  }

  toggle()
  {
    this.activedToggle = !this.activedToggle;
  }
}
