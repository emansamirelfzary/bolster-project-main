import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './users/components/sign-up/sign-up.component';
import { SignInComponent } from './users/components/sign-in/sign-in.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProductsComponent } from './products/components/products/products.component';
import { userAuthGuard } from './users/guards/user-auth.guard';
import { WishListComponent } from './wish-list/components/wish-list/wish-list.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { authGuard } from './users/guards/auth.guard';
import { CartComponent } from './cart/components/cart/cart.component';
import { CheckoutFormComponent } from './orders/components/checkout-form/checkout-form.component';
import { CategoriesComponent } from './categories/components/categories/categories.component';
import { CartProductsComponent } from './cart/components/cart-products/cart-products.component';
import { OrderComponent } from './orders/components/order/order.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signup',canActivate:[userAuthGuard],component:SignUpComponent},
  {path:'signin',canActivate:[userAuthGuard],component:SignInComponent},
  {path:'products',component:AllProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'wishlist',canActivate:[authGuard] ,component:WishListComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'checkout/:id',canActivate:[authGuard],component:CheckoutFormComponent},
  {path:'order',canActivate:[authGuard],component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
