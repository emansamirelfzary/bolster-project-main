import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl='https://ecommerce.routemisr.com/api/v1/cart'

  constructor(private _httpClient:HttpClient) { }

  cartMsg:BehaviorSubject <string>=new BehaviorSubject('')
  cartNum:BehaviorSubject <number>=new BehaviorSubject(0)

getCart():Observable<any>{
  return this._httpClient.get(`${this.baseUrl}`,
 )
}

  addToCart(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}`,{
      productId:id},

      )
  }

  updateProductCount(count:number,id:string):Observable<any>{
    return this._httpClient.put(`${this.baseUrl}/${id}`, {
      count:`${count}`
    },

    )
  }

  removeProduct(id:string):Observable<any>{
    return this._httpClient.delete(`${this.baseUrl}/${id}`,
    )
  }
}
