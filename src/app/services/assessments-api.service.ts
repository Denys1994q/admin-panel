import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AssessmentsApiService {
    private backendUrl = 'https://user-assessment-api.vercel.app';
    
    constructor(private http: HttpClient) {}

    getAssessments() {
        const assessmentsUrl = `${this.backendUrl}/api/userassessments`;
        const token = localStorage.getItem('authToken') || ''
        const headers = new HttpHeaders().set('X-Token', token);
        return this.http.get(assessmentsUrl, { headers })
    }

}