import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('authToken') || '';
        const authRequest = request.clone({
        setHeaders: {
            'X-Token': authToken,
        },
        });
        return next.handle(authRequest);
    }
}
