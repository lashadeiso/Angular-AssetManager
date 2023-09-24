import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainPageComponent } from './user-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent,
    children: [
      {
        path: 'change-password',
        loadChildren: () =>
          import(
            '../../shared/module/change-password/change-password.module'
          ).then(({ ChangePasswordModule }) => ChangePasswordModule),
      },
      {
        path: 'production',
        loadChildren: () =>
          import('../../shared/module/production/production.module').then(
            ({ ProductionModule }) => ProductionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMainPageRoutingModule {}
