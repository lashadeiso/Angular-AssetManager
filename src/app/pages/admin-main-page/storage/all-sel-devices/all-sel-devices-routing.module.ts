import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSelDevicesComponent } from './all-sel-devices.component';

const routes: Routes = [
  {
    path: '',
    component: AllSelDevicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSelDevicesRoutingModule {}
