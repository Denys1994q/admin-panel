import { Component, Input } from "@angular/core";

export interface IGraphData {
    name: string, 
    value: number
}

@Component({
    selector: 'app-bar-graph',
    templateUrl: './bar-graph.component.html',
    styleUrls: ['./bar-graph.component.sass']
})
export class BarGraphComponent {
    @Input() data!: IGraphData[]
    @Input() xAxisLabel!: string
    @Input() yAxisLabel!: string
    view: [number, number] = [650, 350];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;
}