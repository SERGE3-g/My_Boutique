import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

// @ts-ignore
// @ts-ignore
export let appConfig: ApplicationConfig;
export const jwtOptionsFactory = (jwtHelper: JwtHelperService) => {
  return {
    tokenGetter: () => {
      return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!).token : null;
    },
    allowedDomains: ['localhost:8080'],
    disallowedRoutes: ['http://localhost:8080/auth/login']
  }
}
let AuthInterceptor = class AuthInterceptor {
  private jwtHelper: JwtHelperService;
  constructor(jwtHelper: JwtHelperService) {
    this.jwtHelper = jwtHelper;
  }
  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
    const token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!).token : null;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
};
appConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    provideHttpClient(
      withFetch()
    )
  ]
};
