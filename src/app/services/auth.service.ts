import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private backendUrl = 'https://user-assessment-api.vercel.app';

    constructor(private http: HttpClient, private router: Router) {}

    public isAuthenticated$ = new BehaviorSubject<boolean>(false)
    public userDataSubject = new BehaviorSubject<any>(null);
    public userData$ = this.userDataSubject.asObservable();

    login({email, password}: {email: string, password: string}) {
        const loginUrl = `${this.backendUrl}/api/login`;
        return this.http.post<any>(loginUrl, {email: email, password: password}).pipe(
            tap(response => {
                if (response && typeof window !== 'undefined' && localStorage) {
                    localStorage.setItem('authToken', response.token);
                    this.userDataSubject.next(response);
                    this.isAuthenticated$.next(true)
                    this.router.navigate(['/']);
                } 
            }),
        );
    }

    logout() {
        this.userDataSubject.next(null);
        localStorage.removeItem('authToken');
        this.isAuthenticated$.next(false)
        this.router.navigate(['/auth']);
    }

    getUser() {
        if (localStorage.getItem('authToken')) {
            this.isAuthenticated$.next(true)
        }
    }

    isAuthenticated(): boolean {
        return !!this.isAuthenticated$.value
    }
    
}