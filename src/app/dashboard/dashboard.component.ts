import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AssessmentsApiService } from '../services/assessments-api.service';
import { ModalService } from '../modals/modals.service';
import { Color } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    assessments: any[] = []

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
            next: resp => {
                this.modalService.setData(resp)
                this.modalService.openDialog('assessment')
            }
        })
        //  лоадінг
    }

}