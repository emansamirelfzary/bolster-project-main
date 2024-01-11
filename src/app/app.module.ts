import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { WishListModule } from './wish-list/wish-list.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    HomeModule,
    ProductsModule,
    CartModule,
    WishListModule,
    OrdersModule,
    CategoriesModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

  ],
  providers: [   
    {provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
  multi:true},
  {provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
  multi:true},
 

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
