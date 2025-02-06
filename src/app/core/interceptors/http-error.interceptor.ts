import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Interceptor caught HTTP Error:', error.message);

        if (error.status === 404) {
          console.warn('404 Error: Redirecting handled locally.');
        } else if (error.status >= 500) {
          alert('A server error occurred. Please try again later.');
        }

        return throwError(() => new Error(error.message)); // why throwing the error, just call next()
      }),
    );
  }
}
