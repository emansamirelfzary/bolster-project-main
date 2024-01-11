import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishlistProductsComponent } from './components/wishlist-products/wishlist-products.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WishListComponent,
    WishlistProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsModule,
    SharedModule
  ]
})
export class WishListModule { }
