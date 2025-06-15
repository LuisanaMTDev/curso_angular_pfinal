import { Component } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { HomeButtonComponent } from "../../components/home-button/home-button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [HomeButtonComponent, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements CanActivate {
  loginForm: FormGroup
  logged: boolean = false
  username = 'luisa'
  password = '12345678'
  constructor(private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("luisa")]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern("12345678")])
    })
  }

  login() {
    if (this.loginForm.valid) {
      // Simular el almacenamiento del usuario y contraseña
      this.logged = true
      window.localStorage.setItem('username', this.loginForm.value.username)
      window.localStorage.setItem('password', this.loginForm.value.password)
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

  canActivate(): boolean {
    if (this.logged) {
      return true
    } else {
      this.router.navigate(['/'])
      return false
    }
  }
}
