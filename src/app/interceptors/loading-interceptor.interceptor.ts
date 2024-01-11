import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import{NgxSpinnerService}from'ngx-spinner'
import { response } from 'express';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';


@Injectable({
  providedIn:'root'
})
export class LoadingInterceptor implements HttpInterceptorInterceptor {

  constructor(private _ngxspinnersercice:NgxSpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this._ngxspinnersercice.show()
    
    return next.handle(request).pipe(finalize(()=>{
    this._ngxspinnersercice.hide()
    }))
  }
}
