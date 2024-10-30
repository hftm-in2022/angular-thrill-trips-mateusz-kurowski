import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CorrelationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const correlationId = uuidv4();

    const modifiedReq = req.clone({
      headers: req.headers.set('CorrelationId', correlationId),
    });

    return next.handle(modifiedReq);
  }
}
