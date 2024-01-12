import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { response } from 'express';
import { WishListService } from 'src/app/wish-list/services/wish-list.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
isLoggedIn:boolean=false;
searchKey:string=" "
cartMsg:string=''
cartNum:number=0
wishlistMsg:string=''
wishlistNum:number=0

constructor(private _authService:AuthService, private _router:Router, private _cartService:CartService, private _wishlistService:WishListService){

}

ngOnInit(): void {
  this._authService.userData.subscribe((response)=>{
    if (this._authService.userData.getValue()) {
      this.isLoggedIn= true
      this._cartService.getCart().subscribe({
        next:(response)=>{
          this.cartNum=response.numOfCartItems
        }
      });
      this._wishlistService.getWishlistProducts().subscribe({
        next:(response)=>{
      this.wishlistNum=response.count
    }
  })
    }
    else{
      this.isLoggedIn=false
    }
  })





this._cartService.cartMsg.subscribe({
  next:(response)=>{
    this.cartMsg=response
    console.log(this.cartMsg)
    if(this.cartMsg){setTimeout(()=>{
      this.cartMsg=""
    },4000)}
  }
})

this._cartService.cartNum.subscribe({
  next:(response)=>{
    this.cartNum=response
  }
})


this._wishlistService.wishlistMsg.subscribe({
  next:(response)=>{
    this.wishlistMsg=response
    console.log(this.cartMsg)
    if(this.wishlistMsg){setTimeout(()=>{
      this.wishlistMsg=""
    },4000)}
  }
})

this._wishlistService.wishlistNum.subscribe({
  next:(response)=>{
    this.wishlistNum=response
  }
})
}

handleLogOut(){
  this._authService.logout()
  this._router.navigate(['/home'])
}

search() {

  if (this.searchKey) {

    this._router.navigate(['/products'],{queryParams:{term:this.searchKey}});
    this.searchKey=''

  }

}

}
