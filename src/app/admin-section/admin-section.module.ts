import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../table/table.module';
import { AdminSectionComponent } from './admin-section.component';

@NgModule({
    declarations: [
        AdminSectionComponent
    ],
    imports: [
        CommonModule,
        TableModule
    ],
    exports: [
        AdminSectionComponent
    ]
})
export class AdminSectionModule { }