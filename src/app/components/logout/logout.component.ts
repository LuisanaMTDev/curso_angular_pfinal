import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'app-logout',
    imports: [],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.css'
})
export class LogoutComponent {
    constructor(private router: Router, private location: Location) { }
    logout() {
        window.localStorage.removeItem('user')
        if (this.location.path() == '') {
            this.router.navigate(['/'])
            window.location.reload()
        } else {
            this.router.navigate(['/'])
            this.location.go('/')
        }
        console.log('logout')
    }
}
