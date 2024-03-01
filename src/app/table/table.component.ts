import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnChanges {
    @Input() data!: any[];
    displayedColumns: string[] = [];

    ngOnChanges() {
        if (this.data && this.data.length > 0) {
            const firstItem = this.data[0];
            this.displayedColumns = Object.keys(firstItem);
        }
    }    
}
