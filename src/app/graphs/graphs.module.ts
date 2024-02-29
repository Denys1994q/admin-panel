import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

@NgModule({
    declarations: [
        BarGraphComponent
    ],
    imports: [
        CommonModule,
        NgxChartsModule
    ],
    exports: [
        BarGraphComponent
    ]
})
export class GraphsModule { }