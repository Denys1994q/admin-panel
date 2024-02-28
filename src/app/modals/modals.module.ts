import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AssessmentModalComponent } from './assessment-modal/assessment-modal.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AssessmentModalComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule
    ],
    exports: [
    ]
})
export class ModalsModule { }