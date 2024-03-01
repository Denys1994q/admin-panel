import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { backendUrl } from "../environment";
import { IAssessment } from "./models/assessment-model";
import { Observable } from "rxjs";
import { IAssessmentGraph } from "./models/assessment-model";

@Injectable({
    providedIn: 'root'
})
export class AssessmentsApiService {
    
    constructor(private http: HttpClient) {}

    getAssessments(): Observable<IAssessment[]> {
        const assessmentsUrl = `${backendUrl}/api/userassessments`;
        return this.http.get<IAssessment[]>(assessmentsUrl)
    }

    getAssessmentGraph(id: number): Observable<IAssessmentGraph> {
        const assessmentsUrl = `${backendUrl}/api/userassessments/graph?id=${id}`;
        return this.http.get<IAssessmentGraph>(assessmentsUrl)
    }

}