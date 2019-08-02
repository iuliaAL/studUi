import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {


  //constructor(public auth: AuthService) {}

  /*intercept(req, next): Observable<HttpEvent<any>> {

    
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(req);
  }*/

  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', + authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
