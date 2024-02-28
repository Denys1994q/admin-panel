import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsModule } from '../btns/btns.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BtnsModule,
    CardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }