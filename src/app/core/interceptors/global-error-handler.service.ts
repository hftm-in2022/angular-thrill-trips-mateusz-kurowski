import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {}

  handleError(error: unknown): void {
    this.ngZone.run(() => {
      if (
        error instanceof HttpErrorResponse ||
        (error instanceof Error && error.message.startsWith('404'))
      ) {
        console.error('Redirecting to error page:', error);
        this.router.navigate(['/error']);
      } else {
        console.error('Unexpected Error:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    });
  }
}
