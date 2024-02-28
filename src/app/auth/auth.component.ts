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

    constructor(private authService: AuthService) {}

    onSubmit() {
        this.authService.login({email: this.email, password: this.password}).subscribe({
            next: resp => console.log(resp),
            error: resp => this.error = resp.error.error
        })
    }

}