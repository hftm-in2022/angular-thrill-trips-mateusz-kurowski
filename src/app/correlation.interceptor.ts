import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'; // Install UUID library if needed

@Injectable()
export class CorrelationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // Generate a unique CorrelationId for each request
    const correlationId = uuidv4();

    // Clone the request to add the new header
    const modifiedReq = req.clone({
      headers: req.headers.set('CorrelationId', correlationId),
    });

    // Proceed with the modified request
    return next.handle(modifiedReq);
  }
}
