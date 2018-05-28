import { HttpClient, HttpInterceptor,HttpRequest,HttpHandler ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'; 
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@Injectable()
export class HttpinterceptorProvider {

  constructor(public http: HttpClient, 
              public atmService: AtmserviceProvider) {
    console.log('Hello HttpinterceptorProvider Provider');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    let token = this.atmService.getToken();
    
    const authReq = req.clone({
      headers : req.headers.set('bbank-apiKey',environment.apiKey)
                           .set('bbank-secure',token)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}
