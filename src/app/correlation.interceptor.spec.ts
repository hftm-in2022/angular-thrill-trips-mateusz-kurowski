import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { CorrelationInterceptor } from './correlation.interceptor';
import { of } from 'rxjs';

describe('CorrelationInterceptor', () => {
  let interceptor: CorrelationInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorrelationInterceptor],
    });
    interceptor = TestBed.inject(CorrelationInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add CorrelationId header', () => {
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (request: HttpRequest<unknown>) => {
        expect(request.headers.has('CorrelationId')).toBeTrue();
        return of({} as HttpEvent<unknown>);
      },
    };

    interceptor.intercept(req, next).subscribe();
  });
});
