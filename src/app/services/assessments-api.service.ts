import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { backendUrl } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class AssessmentsApiService {
    
    constructor(private http: HttpClient) {}

    getAssessments() {
        const assessmentsUrl = `${backendUrl}/api/userassessments`;
        return this.http.get(assessmentsUrl)
    }

    getAssessmentGraph(id: number) {
        const assessmentsUrl = `${backendUrl}/api/userassessments/graph?id=${id}`;
        return this.http.get(assessmentsUrl)
    }

}