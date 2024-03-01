import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AssessmentsApiService } from '../services/assessments-api.service';
import { ModalService } from '../modals/modals.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { IAssessment } from '../services/models/assessment-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
    assessments: IAssessment[] = []
    isAdmin$: Observable<boolean> = this.authService.userData$.pipe(
        map(userData => userData?.role === 'Admin')
    )
    unsubscribe$ = new Subject<void>()

    constructor(
        private authService: AuthService, 
        private modalService: ModalService,
        private assessmentsApiService: AssessmentsApiService) {}

    ngOnInit() {
        this.assessmentsApiService.getAssessments().subscribe({
            next: resp => this.assessments = resp
        })
    }

    handleLogout() {
        this.authService.logout()
    }

    openModal(id: number) {
        this.assessmentsApiService.getAssessmentGraph(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
            next: resp => {
                const graphData = []
                for (const [key, value] of Object.entries(resp.data)) {
                    graphData.push({ name: key, value: value });
                }
                this.modalService.setData(graphData)
                this.modalService.openDialog('assessment')
            }
        })
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

}