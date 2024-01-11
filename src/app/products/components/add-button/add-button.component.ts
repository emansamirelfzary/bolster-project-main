import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../interfaces/product';
import { Cart } from 'src/app/cart/interfaces/cart';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit{

isLoggedIn:boolean=false
cartProducts:string[]=[]

@Input() product:Product={} as Product


constructor(private _authService:AuthService, private _router:Router, private _cartService:CartService){
    
  }

  ngOnInit(): void {
    this._authService.userData.subscribe((response)=>{
      if (this._authService.userData.getValue()) {
        this.isLoggedIn= true
      }
      else {
        this.isLoggedIn=false
      }
    })

    this._cartService.getCart().subscribe({
      next:(response)=>{
        const newCartProduct=response.data.products.map((item:any)=>item.product.id)
        this.cartProducts= newCartProduct
  
      }
    })
  }


  addProductToCart(productId:string){
    if(this.isLoggedIn){
      this._cartService.addToCart(productId).subscribe({
        next:(response)=>{
          this._cartService.cartMsg.next(response.message);
          this._cartService.cartNum.next(response.numOfCartItems);
          this.cartProducts=response.data.products.map((item:any)=>item.product)
        }

      })

    }
    else{
      this._router.navigate(['/signin'])
    }
  }

}
