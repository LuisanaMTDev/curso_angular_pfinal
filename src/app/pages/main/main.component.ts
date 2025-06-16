import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HomeButtonComponent } from "../../components/home-button/home-button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogoutComponent } from "../../components/logout/logout.component";

@Component({
  selector: 'app-main',
  imports: [HomeButtonComponent, ReactiveFormsModule, LogoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  loginForm: FormGroup
  userRegistered = window.localStorage.getItem('user')
  constructor(private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("luisa")]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern("12345678")])
    })
  }

  login() {
    if (this.loginForm.valid) {
      window.localStorage.setItem('user', JSON.stringify({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }))
      this.userRegistered = JSON.parse(window.localStorage.getItem('user') || 'false')
      console.log(this.loginForm)
    } else {
      console.log("invalid")
      console.log(this.loginForm)
    }
  }

  redirectToGetRandomPokemon() {
    this.router.navigate(['/get-random-pokemon'])
  }
  redirectToListAllPokemonByType() {
    this.router.navigate(['/list-all-pokemon-by-type'])
  }
  redirectToSearchPokemonByName() {
    this.router.navigate(['/search-pokemon-by-name'])
  }
}
