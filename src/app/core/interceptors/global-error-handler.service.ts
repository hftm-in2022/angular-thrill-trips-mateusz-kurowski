import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
      if (error instanceof HttpErrorResponse) {
        console.error('HTTP Error:', error.message);
        if (error.status >= 500) {
          this.router.navigate(['/error']);
        }
      } else {
        console.error('Unexpected Error:', error);
        this.router.navigate(['/error']);
      }
    });
  }
}
