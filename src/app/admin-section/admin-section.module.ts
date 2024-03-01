import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../table/table.module';
import { AdminSectionComponent } from './admin-section.component';
import { ErrorModule } from '../error/error.module';

@NgModule({
    declarations: [
        AdminSectionComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        ErrorModule
    ],
    exports: [
        AdminSectionComponent
    ]
})
export class AdminSectionModule { }