import { LandingComponent } from './pages/landing/landing.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing/login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   },
    // ],
  }, // Added closing brace here
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
