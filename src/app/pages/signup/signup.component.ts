import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.name && this.email && this.password && this.confirmPassword) {
      if (this.password === this.confirmPassword) {
        // Aquí podrías agregar la lógica de registro, validaciones adicionales, etc.
        alert('Registration Successful');
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all fields');
    }
  }
}
