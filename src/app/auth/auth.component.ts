import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnDestroy {
    email: string = ''; 
    password: string = '';
    error!: string
    loading!: boolean
    unsubscribe$ = new Subject<void>()

    constructor(private authService: AuthService) {}

    onSubmit() {
        this.loading = true
        this.authService.login({email: this.email, password: this.password})
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe({
                next: resp => this.loading = false,
                error: resp => {
                    this.loading = false
                    this.error = resp.error.error
                } 
            })
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

}