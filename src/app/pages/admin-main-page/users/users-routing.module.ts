import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'all-user',
        loadChildren: () =>
          import('./all-user/all-user.module').then(
            ({ AllUserModule }) => AllUserModule
          ),
      },
      {
        path: 'user-registration',
        loadChildren: () =>
          import('./user-registration/user-registration.module').then(
            ({ UserRegistrationModule }) => UserRegistrationModule
          ),
      },
      {
        path: 'single-user',
        loadChildren: () =>
          import('./single-user/single-user.module').then(
            ({ SingleUserModule }) => SingleUserModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./reset-password/reset-password.module').then(
            ({ ResetPasswordModule }) => ResetPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
