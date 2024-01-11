import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request)
    const headerToken:any ={
      token:localStorage.getItem('userToken')
    }
    if(localStorage.getItem('userToken') !== null){
     request = request.clone({setHeaders:headerToken})
    }
    console.log()
    return next.handle(request)

  }
}
