import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }