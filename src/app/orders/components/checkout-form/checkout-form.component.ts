import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Cart } from 'src/app/cart/interfaces/cart';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit{

  isLoading:boolean=false;
  isPaymentCash:boolean=false;
  cartId:string='';
  cartProducts:Cart[]= [];
  cartProductsNum:number=0;
  cartTotalPrice:number=0

  constructor(private _cartService:CartService, private _router:Router, private _activatedroute:ActivatedRoute, private _ordersService:OrdersService){}


  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((res:any)=>{this.cartId= res.params.id})
    console.log(this.cartId)


    this._cartService.getCart().subscribe({
      next:(response)=>{
        this.cartProducts=response.data.products;
        this.cartProductsNum=response.numOfCartItems
        this.cartTotalPrice=response.data.totalCartPrice
         console.log(this.cartProducts)

      }
    })
}


shippingForm:FormGroup = new FormGroup({
  details:new FormControl("", Validators.required),
  phone:new FormControl("",[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl("",Validators.required),
  paymentMethod:new FormControl("")


})
get details(){
  return this.shippingForm.get('details')
}
get phone(){
  return this.shippingForm.get('phone')
}
get city(){
  return this.shippingForm.get('city')
}


handlecheckout(){
  if(this.shippingForm.valid){
    if (this.shippingForm.get('paymentMethod')?.value === 'visa') {

      this._ordersService.addOnlinePayment(this.cartId,this.shippingForm.value).subscribe({
        next:(response)=>{
          if(response.status === 'success'){
            window.location.href= response.session.url
          }
          console.log(response.session.url)
        }
      })

    } else if (this.shippingForm.get('paymentMethod')?.value === 'cash') {
  this.isPaymentCash=true;
  this._ordersService.addCahPayment(this.cartId,this.shippingForm.value).subscribe({
    next:(response)=>{
      if(response.status === 'success'){
        this._router.navigate(['./order'])
        this._cartService.cartNum.next(0)
      }
      console.log(response)
    }
  })
    }
console.log(this.shippingForm)
}
}

}
