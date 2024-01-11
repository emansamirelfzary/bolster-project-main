import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterCartProductsPipe } from './pipe/filter-cart-products.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from '../interceptors/http-interceptor.interceptor';


@NgModule({
  declarations: [
    CartComponent,
    CartProductsComponent,
    FilterCartProductsPipe,
  ],
  providers:[ {provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
  multi:true}],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],

})
export class CartModule { }
