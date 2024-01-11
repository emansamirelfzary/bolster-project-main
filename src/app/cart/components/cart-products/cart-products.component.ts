import { Cart } from '../../interfaces/cart';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit{


  constructor(private _cartService:CartService) {}

cartProducts:Cart[]= [];
  cartProductsNum:number=0;
  cartTotalPrice:number=0;
  cartId:string='';
  cartList=true

  ngOnInit(): void {
      this._cartService.getCart().subscribe({
        next:(response)=>{
          this.cartProducts=response.data.products;
          this.cartProductsNum=response.numOfCartItems
          this.cartTotalPrice=response.data.totalCartPrice
          this.cartId=response.data._id
           console.log(this.cartProducts)
           if(this.cartProducts.length==0){
            this.cartList=false
           }

        }
      })
  }

  updateCount(count:number,id:string){
    this._cartService.updateProductCount(count,id).subscribe({
      next:(response)=>{
        console.log(response)
        this.cartProducts=response.data.products;
        this.cartTotalPrice=response.data.totalCartPrice
      }
    })

    }

    removeProduct(id:string){
      this._cartService.removeProduct(id).subscribe({
        next:(response)=>{
          console.log(response)
          this.cartProducts=response.data.products
          this.cartProductsNum=response.numOfCartItems
          this.cartTotalPrice=response.data.totalCartPrice
          this._cartService.cartNum.next(response.numOfCartItems)
          this._cartService.cartMsg.next('Product Removed Successfully from Your Cart')
          this.ngOnInit()
        }
      })

  }
}
