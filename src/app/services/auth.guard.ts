import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
        if (this.authService.isAuthenticated()) {
            return of(true)
        } else {
            this.router.navigate(['/auth']);
            return of(false)
        }
    }

}
