import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsModule } from '../btns/btns.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BtnsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }