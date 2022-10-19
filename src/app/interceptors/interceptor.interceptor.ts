import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'propiedad': 'valor',
      'name': 'beesoftlabs'
    })

    const requestClone = request.clone({
      headers
    })

    return next.handle(requestClone);
  }
}
