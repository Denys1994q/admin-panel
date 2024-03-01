import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { backendUrl } from "../environment";
import { IAuthedUser } from "./models/user-model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

    public userDataSubject$ = new BehaviorSubject<IAuthedUser | null>(null);
    public userData$ = this.userDataSubject$.asObservable();

    login({email, password}: {email: string, password: string}) {
        const loginUrl = `${backendUrl}/api/login`;
        return this.http.post<IAuthedUser>(loginUrl, {email: email, password: password}).pipe(
            tap(response => {
                localStorage.setItem('authToken', response.token);
                this.userDataSubject$.next(response);
                this.router.navigate(['/']);
            }),
        );
    }

    logout() {
        this.userDataSubject$.next(null);
        localStorage.removeItem('authToken');
        this.router.navigate(['/auth']);
    }

    isAuthenticated(): boolean {
        return !!this.userDataSubject$.value
    }
    
}