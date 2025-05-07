import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login(this.email, this.password).subscribe(response => {
      localStorage.setItem('token', response.token);
      // redirigir a dashboard
    });
  }
}