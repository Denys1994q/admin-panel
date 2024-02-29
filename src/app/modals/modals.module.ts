import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AssessmentModalComponent } from './assessment-modal/assessment-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { GraphsModule } from '../graphs/graphs.module';

@NgModule({
    declarations: [
        AssessmentModalComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        GraphsModule
    ],
    exports: [
    ]
})
export class ModalsModule { }