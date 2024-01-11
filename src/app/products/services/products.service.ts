import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl='https://route-ecommerce.onrender.com/api/v1/products';


  getProducts():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}`)
  }

  getProductDetails(productId:string):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/${productId}`)
  }

}
