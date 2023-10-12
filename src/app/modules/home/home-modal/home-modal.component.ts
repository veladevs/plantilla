import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss']
})
export class HomeModalComponent implements OnInit {
    constructor(
    ) { }
  
    ngOnInit(): void {
      $('#modalMantenimiento').modal('show');
    }
}
