import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOwnerOfSelDevComponent } from './new-owner-of-sel-dev.component';

const routes: Routes = [
  {
    path: '',
    component: NewOwnerOfSelDevComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOwnerOfSelDeviceRoutingModule {}
