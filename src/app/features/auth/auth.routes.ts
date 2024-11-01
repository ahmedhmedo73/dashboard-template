import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
    ],
  },
];
