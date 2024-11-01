import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/user-form/user-form.component').then(
        (c) => c.UserFormComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/user-form/user-form.component').then(
        (c) => c.UserFormComponent
      ),
  },
];
