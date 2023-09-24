import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOwnerOfSelDevComponent } from './edit-owner-of-sel-dev.component';

const routes: Routes = [
  {
    path: '',
    component: EditOwnerOfSelDevComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOwnerOfSelDeviceRoutingModule {}
