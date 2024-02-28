import { NgModule } from '@angular/core';
import { LogOutComponent } from './logout-btn/logout-btn.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LogOutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LogOutComponent
  ]
})
export class BtnsModule { }