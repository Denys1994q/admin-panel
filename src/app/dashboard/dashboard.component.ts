import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AssessmentsApiService } from '../services/assessments-api.service';
import { ModalService } from '../modals/modals.service';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    assessments: any[] = []
    isAdmin$: Observable<boolean> = this.authService.userData$.pipe(
        map((userData: any) => userData.role === 'Admin')
    )

    constructor(
        private authService: AuthService, 
        private modalService: ModalService,
        private assessmentsApiService: AssessmentsApiService) {}

    ngOnInit() {
        this.assessmentsApiService.getAssessments().subscribe({
            next: (resp: any) => this.assessments = resp
        })
    }

    handleLogout() {
        this.authService.logout()
    }

    openModal(id: number) {
        this.assessmentsApiService.getAssessmentGraph(id).subscribe({
            next: (resp: any) => {
                const graphData = []
                for (const [key, value] of Object.entries(resp.data)) {
                    graphData.push({ name: key, value: value });
                }
                this.modalService.setData(graphData)
                this.modalService.openDialog('assessment')
            }
        })
        //  лоадінг
    }

}