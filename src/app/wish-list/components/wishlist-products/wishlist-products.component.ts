import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { Product } from 'src/app/products/interfaces/product';

@Component({
  selector: 'app-wishlist-products',
  templateUrl: './wishlist-products.component.html',
  styleUrls: ['./wishlist-products.component.css']
})
export class WishlistProductsComponent implements OnInit {

  wishListProducts:Product[]=[]
  wishList=true

  constructor(private _wishlistService:WishListService){}

  ngOnInit(): void {

  this._wishlistService.getWishlistProducts().subscribe({
    next:(response)=>{
      this.wishListProducts=response.data
      console.log(this.wishListProducts)
      if(this.wishListProducts.length==0){
        this.wishList=false
      }
    }
  })

  }

  removeProductFromWishlist(productId:string){
      this._wishlistService.removeFromWishlist(productId).subscribe({
        next:(response)=>{
        this._wishlistService.wishlistMsg.next(response.message)
        this._wishlistService.wishlistNum.next(response.data.length)
        this.ngOnInit()
        console.log(response.message)
        }
      })
    }
}
