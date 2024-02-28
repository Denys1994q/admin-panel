import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsModule } from '../btns/btns.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../card/card.module';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BtnsModule,
    CardModule,
    ModalsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }