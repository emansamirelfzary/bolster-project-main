import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { WishListService } from 'src/app/wish-list/services/wish-list.service';
import { Product } from '../../interfaces/product';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrls: ['./wish-list-button.component.css']
})
export class WishListButtonComponent implements OnInit{
productDetails:boolean=false;
isLoggedIn:boolean=false;
wishListProducts:string[]=[]

constructor (private _authService:AuthService ,private _activateRoute:ActivatedRoute, private _wishlistService:WishListService, private _router:Router){}

@Input() product:Product={} as Product

ngOnInit(): void {

  if (this._activateRoute.snapshot.routeConfig?.path?.includes('productdetails')){
    this.productDetails=true
  }
  else {
    this.productDetails=false
  }

  this._authService.userData.subscribe((response)=>{
    if (this._authService.userData.getValue()) {
      this.isLoggedIn= true
    }
    else {
      this.isLoggedIn=false
    }
  })

  this._wishlistService.getWishlistProducts().subscribe({
    next:(response)=>{
      const newWishlist=response.data.map((item:any)=>item._id)
      this.wishListProducts=newWishlist

    }
  })

}

addProductToWishlist(productId:string){
  if(this.isLoggedIn){
this._wishlistService.addToWishlist(productId).subscribe({
  next:(response)=>{
    this._wishlistService.wishlistMsg.next(response.message)
    this._wishlistService.wishlistNum.next(response.data.length)
    this.wishListProducts=response.data
  }
})}

else{
  this._router.navigate(['/signin'])

}

}

removeProductFromWishlist(productId:string){
  if(this.isLoggedIn){
    this._wishlistService.removeFromWishlist(productId).subscribe({
      next:(response)=>{
      this._wishlistService.wishlistMsg.next(response.message)
      this._wishlistService.wishlistNum.next(response.data.length)
      this.wishListProducts=response.data
      }
    })
  }

  else{
    this._router.navigate(['/signin'])
  
  }
}
}
