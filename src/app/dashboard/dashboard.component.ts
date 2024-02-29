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
            next: (resp: any) => {
                console.log(resp)
                // 
                // data: {agreeableness: 15.678, drive: 17.891, luck: 11.345, openness: 22.456}
                const graphData = []
                for (const [key, value] of Object.entries(resp.data)) {
                    // Формуємо новий об'єкт для кожної пари ключ-значення і додаємо його до масиву
                    graphData.push({ name: key, value: value });
                }
                // graphData.push()
                this.modalService.setData(graphData)
                this.modalService.openDialog('assessment')
            }
        })
        //  лоадінг
    }

}