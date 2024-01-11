import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpForm } from '../interface/sign-up-form';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl='https://ecommerce.routemisr.com/api/v1/auth/'

  constructor(private _httpClient:HttpClient) {
    if (localStorage.getItem('userToken') !== null){
      this.getUserData()
    }
  }

  userData:BehaviorSubject<any>= new BehaviorSubject (null)

  getUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken=jwtDecode(encodedToken)
    this.userData.next(decodedToken)
    console.log(this.userData)
  }

  signUp(form:SignUpForm):Observable<any>{
   return this._httpClient.post(`${this.baseUrl}signup`,form)
  }

  signIn(form:FormGroup):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}signin`,form)
  }

  logout(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
  }

}
