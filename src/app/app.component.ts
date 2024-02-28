import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    unsubscribe$ = new Subject<void>()

    constructor(private authService: AuthService) {}
    
    ngOnInit() {
        this.authService.getUser()
    }

}
