import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
    @Input() menuItems!: {icon: string, name: string, link: string}[]
}