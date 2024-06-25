import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  EmailId: string = '';
  Password: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.EmailId && this.Password) {
      this.loading = true; // Mostrar el indicador de carga
      setTimeout(() => {
        // Simulamos un retraso para mostrar la animación de carga
        alert('Login Success');
        localStorage.setItem('angular17token', 'dummy-token');
        this.router.navigateByUrl('/dashboard');
        this.loading = false; // Ocultar el indicador de carga
      }, 2000); // Puedes ajustar el tiempo según sea necesario
    } else {
      alert('Please enter email and password');
    }
  }
}
