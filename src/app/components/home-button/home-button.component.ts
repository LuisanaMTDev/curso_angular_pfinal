import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-home-button',
    imports: [],
    templateUrl: './home-button.component.html',
    styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {
    constructor(private router: Router) { }

    redirectToMain() {
        this.router.navigate(['/'])
    }
}
