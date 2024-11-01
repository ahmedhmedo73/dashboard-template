import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { Lang } from '../enums/Lang';

export const httpInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (!request.url.includes('i18n')) {
    const authService = inject(AuthService);

    const headersConfig = {
      'X-Accept-Language': localStorage.getItem('lang') || Lang.ar,
    } as { [name: string]: string | string[] };

    headersConfig['Authorization'] = `Bearer ${
      authService.getCurrentUser()?.authenticationToken
    }`;

    const clonedRequest = request.clone({
      url: environment.apiUrl + request.url,
      setHeaders: headersConfig,
    });

    return next(clonedRequest);
  } else {
    return next(request);
  }
};
