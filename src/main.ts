import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './app/core/interceptors/global-error-handler.service';
import { HttpErrorInterceptor } from './app/core/interceptors/http-error.interceptor';
import { authConfig } from './app/core/auth/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    provideAuth(authConfig),
    provideAnimations(),
  ],
});
