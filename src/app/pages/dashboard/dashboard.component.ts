import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    // Datos estáticos de los usuarios
    this.users = [
      { id: 1, name: 'User One', email: 'userone@example.com' },
      { id: 2, name: 'User Two', email: 'usertwo@example.com' },
      { id: 3, name: 'User Three', email: 'userthree@example.com' },
      // Agrega más usuarios según sea necesario
    ];
  }
}
