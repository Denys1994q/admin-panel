import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "./models/user-model";
import { Observable } from "rxjs";
import { backendUrl } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUser[]> {
        const assessmentsUrl = `${backendUrl}/api/users`;
        return this.http.get<IUser[]>(assessmentsUrl)
    }
}
