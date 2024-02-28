import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
    email: string = ''; 
    password: string = '';
    error!: string
    loading!: boolean

    constructor(private authService: AuthService) {}

    onSubmit() {
        this.loading = true
        this.authService.login({email: this.email, password: this.password}).subscribe({
            next: resp => this.loading = false,
            error: resp => {
                this.loading = false
                this.error = resp.error.error
            } 
        })
    }

}