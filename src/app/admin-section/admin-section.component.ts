import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersApiService } from "../services/users-api.service";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { IUser } from "../services/models/user-model";

@Component({
    selector: 'app-admin-section',
    templateUrl: './admin-section.component.html',
    styleUrls: ['./admin-section.component.sass']
})
export class AdminSectionComponent implements OnInit, OnDestroy {
    users!: IUser[]
    getUsersLoading$ = new BehaviorSubject<boolean>(false)
    getUsersError$ = new BehaviorSubject<boolean>(false)
    unsubscribe$ = new Subject<void>()

    constructor(private usersApiService: UsersApiService) {}

    ngOnInit() {
        this.getUsersLoading$.next(true)
        this.usersApiService.getUsers().pipe(takeUntil(this.unsubscribe$)).subscribe({
            next: resp => {
                this.getUsersLoading$.next(false)
                this.users = resp
            },
            error: resp => {
                this.getUsersLoading$.next(false)
                this.getUsersError$.next(true)
            }
        })
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

}
