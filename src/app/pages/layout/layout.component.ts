import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, DashboardComponent],
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logoff() {
    this.router.navigateByUrl('/login');
  }
  redirectToLogin() {
    this.router.navigate(['/landing/login']);
  }
  redirectToServices() {
    this.router.navigate(['/landing/services']);
  }
}
