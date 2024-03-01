import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersApiService } from "../services/users-api.service";
import { Subject, takeUntil } from "rxjs";
import { IUser } from "../services/models/user-model";

@Component({
    selector: 'app-admin-section',
    templateUrl: './admin-section.component.html',
    styleUrls: ['./admin-section.component.sass']
})
export class AdminSectionComponent implements OnInit, OnDestroy {
    users!: IUser[]
    unsubscribe$ = new Subject<void>()

    constructor(private usersApiService: UsersApiService) {}

    ngOnInit() {
        this.usersApiService.getUsers().pipe(takeUntil(this.unsubscribe$)).subscribe({
            next: resp => this.users = resp
        })
    }

    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }

}
