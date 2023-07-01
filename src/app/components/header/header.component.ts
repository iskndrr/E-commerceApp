import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dynamicSlides = [
    {
      id: '1',
      src:'assets/images/1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'assets/images/2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'assets/images/3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'assets/images/4.jpg',
      alt:'Side 4',
      title:'Side 4'
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // navText: ,
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
