import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-logout-btn',
    templateUrl: './logout-btn.component.html',
    styleUrls: ['./logout-btn.component.sass']
})
export class LogOutComponent {
    @Output() logoutClick: EventEmitter<void> = new EventEmitter<void>();

    emitLogoutClick() {
        this.logoutClick.emit();
    }
}