import { LandingComponent } from './pages/landing/landing.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServicesComponent } from './services/services.component';

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
    path: 'landing/signup',
    component: SignupComponent,
  },
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
      {
        path: 'Services',
        component: ServicesComponent,
      },
    ],
  },
];
