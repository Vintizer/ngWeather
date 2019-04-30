import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'DELETE') {
      const authToken: string = sessionStorage.getItem('isAdmin');
      if (!authToken) {
        return next.handle(req);
      }
      const updatedRequest: HttpRequest<any> = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
      return next.handle(updatedRequest);
    } else {
      return next.handle(req);
    }
  }
}
