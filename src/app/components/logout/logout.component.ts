import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-logout',
    imports: [],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.css'
})
export class LogoutComponent {
    @Output() newLogged = new EventEmitter<boolean>()

    logout() {
        this.newLogged.emit(false)
    }
}
