import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AssessmentsApiService } from '../services/assessments-api.service';
import { ModalService } from '../modals/modals.service';
import { BehaviorSubject, Observable, Subject, map, takeUntil } from 'rxjs';
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
    getAssessmentsError$ = new BehaviorSubject<boolean>(false)
    getAssessmentGraphError$ = new BehaviorSubject<boolean>(false)
    unsubscribe$ = new Subject<void>()

    constructor(
        private authService: AuthService, 
        private modalService: ModalService,
        private assessmentsApiService: AssessmentsApiService) {}

    ngOnInit() {
        this.assessmentsApiService.getAssessments().pipe(takeUntil(this.unsubscribe$)).subscribe({
            next: resp => this.assessments = resp,
            error: resp => this.getAssessmentsError$.next(true)
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
            },
            error: resp => this.getAssessmentGraphError$.next(true)
        })
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

}