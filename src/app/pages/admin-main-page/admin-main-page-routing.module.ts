import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainPageComponent } from './admin-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainPageComponent,
    children: [
      {
        path: 'change-password',
        loadChildren: () =>
          import(
            '../../shared/module/change-password/change-password.module'
          ).then(({ ChangePasswordModule }) => ChangePasswordModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../admin-main-page/users/users.module').then(
            ({ UsersModule }) => UsersModule
          ),
      },
      {
        path: 'production',
        loadChildren: () =>
          import('../../shared/module/production/production.module').then(
            ({ ProductionModule }) => ProductionModule
          ),
      },
      {
        path: 'storage',
        loadChildren: () =>
          import('./storage/storage.module').then(
            ({ StorageModule }) => StorageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMainPageRoutingModule {}
