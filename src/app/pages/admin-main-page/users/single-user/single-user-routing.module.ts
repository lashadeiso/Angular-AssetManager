import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleUserComponent } from './single-user.component';

const routes: Routes = [
  {
    path: '',
    component: SingleUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleUserRoutingModule {}
