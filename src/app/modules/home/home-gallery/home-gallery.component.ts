import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  slider_1:string = 'assets/images/slider/slider_1.jpg';
  slider_2:string = 'assets/images/slider/slider_2.jpg';
  slider_3:string = 'assets/images/slider/slider_3.jpg';

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
