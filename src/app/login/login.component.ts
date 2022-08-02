import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté (pikachu)';
  name : string ; 
  password : string ; 
  auth: AuthService;

  constructor( private AuthService : AuthService,
                private router : Router
    ) { }

  ngOnInit(): void {
    this.auth= this.AuthService;
  }

  setMessage(){
    if (this.auth.isLoggedIn) {
      this.message='Vous êtes connecté';
    } else {
      this.message='Identifiant ou mot de passe incorrect'
      
    }
  }

  login(){
    this.message = 'Tentative de connexion ...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean)=>{
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemons']);
        }else {
          this.password= '';
          this.router.navigate(['/login']);
          
        }
      })
  }

  logout(){
    this.auth.logout();
    this.message = 'Vous êtes déconnecté';
  }

}
