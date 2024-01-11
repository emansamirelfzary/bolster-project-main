import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WishListButtonComponent } from './components/wish-list-button/wish-list-button.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    AddButtonComponent,
    ProductDetailsComponent,
    WishListButtonComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    SharedModule
  ],
  exports:[
    ProductsComponent,
    AddButtonComponent
  ]
})
export class ProductsModule { }
