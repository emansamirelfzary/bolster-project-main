import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DiscoverBoxComponent } from './components/discover-box/discover-box.component';
import { ProductsModule } from '../products/products.module';
import { FacilityComponent } from './components/facility/facility.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PhotoSliderComponent } from './components/photo-slider/photo-slider.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    DiscoverBoxComponent,
    FacilityComponent,
    PartnerComponent,
    PhotoSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ProductsModule


  ]
})
export class HomeModule { }
