import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AssessmentsApiService } from '../services/assessments-api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    assessments: any[] = []

    constructor(private authService: AuthService, private assessmentsApiService: AssessmentsApiService) {}

    ngOnInit() {
        this.assessmentsApiService.getAssessments().subscribe({
            next: (resp: any) => this.assessments = resp
        })
        // /api/userassessments запит однаковий, токени інші 
    }

    handleLogout() {
        this.authService.logout()
    }
}