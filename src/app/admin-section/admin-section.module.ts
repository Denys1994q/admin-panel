import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../table/table.module';
import { AdminSectionComponent } from './admin-section.component';
import { ErrorModule } from '../error/error.module';
import { AuthGuard } from '../services/auth.guard';
import { RouterModule } from '@angular/router';

const routes = [
    {path: '', component: AdminSectionComponent, canActivate: [AuthGuard]}
]

@NgModule({
    declarations: [
        AdminSectionComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        TableModule,
        ErrorModule
    ],
    exports: [
        AdminSectionComponent
    ]
})
export class AdminSectionModule { }