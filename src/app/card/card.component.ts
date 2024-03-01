import { Component, Input } from '@angular/core';

interface ICard {
    id: number;
    name: string;
    active: boolean;
    users_resolved: number;
    image_url: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass']
})
export class CardComponent {
    @Input() card!: ICard;
}