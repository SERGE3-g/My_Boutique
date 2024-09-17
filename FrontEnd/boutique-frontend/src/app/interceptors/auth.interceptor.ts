import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);

};

export const interceptors = [
  authInterceptor
];

export const interceptorsProvider = {
  provide: 'INTERCEPTORS',
  useValue: interceptors
};
