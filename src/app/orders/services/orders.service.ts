import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl='https://route-ecommerce.onrender.com/api/v1/orders/'

  constructor(private _httpClient:HttpClient) { }

  addOnlinePayment(cartId:string, shippingAdress:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}checkout-session/${cartId}?url=http://localhost:4200`,{
    shippingForm:shippingAdress},

    )
    }

    addCahPayment(cartId:string,shippingAdress:any):Observable<any>{
      return this._httpClient.post(`${this.baseUrl}${cartId}`,{
    shippingForm:shippingAdress})
    }

}
