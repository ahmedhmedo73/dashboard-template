import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toaster: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if ([401].includes(err.status)) {
          // auto logout if 401  response returned from api
          this.router.navigate(['auth/login']).then(() => {
            window.location.reload();
          });
        } else if ([403].includes(err.status)) {
          this.router.navigate(['/no-access']);
        } else if ([404].includes(err.status)) {
          this.router.navigate(['/notFound']);
        } else if ([400].includes(err.status)) {
          this.toaster.error(err.error.errors[0].msg);
        } else if ([500].includes(err.status)) {
          this.toaster.error('خطأ في الخادم');
        }
        const error =
          (err && err.error && err.error.message) ||
          (err && err.error && err.error.model) ||
          err.statusText;
        if (err.error.errors) {
          Object.values(err.error.errors).forEach((error: any) => {
            // this.toaster.error(error?.msg || 'حدث خطا ما');
          });
        } else {
          // this.toaster.error(error || 'حدث خطا ما');
        }
        return throwError(err);
      })
    );
  }
}
