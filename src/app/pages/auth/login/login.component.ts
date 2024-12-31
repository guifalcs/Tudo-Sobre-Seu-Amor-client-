import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  fazerLogin() {
    const loginData = this.loginForm.value;

    this.auth.login(loginData.email, loginData.password).subscribe({
      next: (response) => {},
      error: (e) => {
        alert(e.error);
      },
      complete: () => {},
    });

    this.loginForm.reset();
  }
}
