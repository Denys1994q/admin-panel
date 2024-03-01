import { Component, OnInit } from "@angular/core";
import { UsersApiService } from "../services/users-api.service";

@Component({
    selector: 'app-admin-section',
    templateUrl: './admin-section.component.html',
    styleUrls: ['./admin-section.component.sass']
})
export class AdminSectionComponent implements OnInit {
    users!: any

    constructor(private usersApiService: UsersApiService) {}

    ngOnInit() {
        this.usersApiService.getUsers().subscribe({
            next: resp => this.users = resp
        })
    }

}