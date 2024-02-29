import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-bar-graph',
    templateUrl: './bar-graph.component.html',
    styleUrls: ['./bar-graph.component.sass']
})
export class BarGraphComponent {
    @Input() data!: {name: string, value: number}[]
    @Input() xAxisLabel!: string
    @Input() yAxisLabel!: string
    // single: {name: string, value: number}[] = [
    //     { name: 'Data1', value: 10 },
    //     { name: 'Data2', value: 20 },
    //     { name: 'Data3', value: 30 },
    // ]
    view: [number, number] = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;
}