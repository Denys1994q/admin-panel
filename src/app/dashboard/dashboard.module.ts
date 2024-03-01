import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsModule } from '../btns/btns.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../card/card.module';
import { ModalsModule } from '../modals/modals.module';
import { MenuModule } from '../menu/menu.module';
import { ErrorModule } from '../error/error.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        BtnsModule,
        CardModule,
        ModalsModule,
        MenuModule,
        ErrorModule,
        MatProgressSpinnerModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }