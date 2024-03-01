import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { backendUrl } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class AssessmentsApiService {
    
    constructor(private http: HttpClient) {}

    getAssessments() {
        const assessmentsUrl = `${backendUrl}/api/userassessments`;
        const token = localStorage.getItem('authToken') || ''
        const headers = new HttpHeaders().set('X-Token', token);
        return this.http.get(assessmentsUrl, { headers })
    }

    getAssessmentGraph(id: number) {
        const assessmentsUrl = `${backendUrl}/api/userassessments/graph?id=${id}`;
        const token = localStorage.getItem('authToken') || ''
        const headers = new HttpHeaders().set('X-Token', token);
        return this.http.get(assessmentsUrl, { headers })
    }

}