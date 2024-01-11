import { trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.css']
})
export class PhotoSliderComponent{

  customOptions: OwlOptions = {
    loop:true,
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    navText: ['', ''],
    items:4,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3,
      }
    }
  }


}
