import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IGraphData } from 'src/app/graphs/bar-graph/bar-graph.component';

@Component({
    selector: 'app-assessment-modal',
    templateUrl: './assessment-modal.component.html',
    styleUrls: ['./assessment-modal.component.sass']
})
export class AssessmentModalComponent  {

    constructor(@Inject(MAT_DIALOG_DATA) public data: IGraphData[]) {}

}