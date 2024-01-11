import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  baseUrl='https://route-ecommerce.onrender.com/api/v1/wishlist'

  constructor(private _httpClient:HttpClient) { }

  wishlistMsg:BehaviorSubject <string>=new BehaviorSubject('')
  wishlistNum:BehaviorSubject <number>=new BehaviorSubject(0)


  getWishlistProducts():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}`
    )

  }

  addToWishlist(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}`,{
      productId:id},

      )
  }

  removeFromWishlist(id:string):Observable<any>{
    return this._httpClient.delete(`${this.baseUrl}/${id}`,

    )
  }
}
