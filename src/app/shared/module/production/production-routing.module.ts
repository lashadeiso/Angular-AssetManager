import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductionComponent } from './production.component';

const routes: Routes = [
  {
    path: '',
    component: ProductionComponent,
    children: [
      {
        path: 'all-owners-of-sel-device',
        loadChildren: () =>
          import('./all-owners-of-sel-dev/all-owners-of-sel-dev.module').then(
            ({ AllOwnersOfSelDevModule }) => AllOwnersOfSelDevModule
          ),
      },
      {
        path: 'edit-owner-of-sel-device',
        loadChildren: () =>
          import('./edit-owner-of-sel-dev/edit-owner-of-sel-dev.module').then(
            ({ EditOwnerOfSelDevModule }) => EditOwnerOfSelDevModule
          ),
      },
      {
        path: 'new-owner-of-sel-device',
        loadChildren: () =>
          import('./new-owner-of-sel-dev/new-owner-of-sel-dev.module').then(
            ({ NewOwnerOfSelDevModule }) => NewOwnerOfSelDevModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionRoutingModule {}
