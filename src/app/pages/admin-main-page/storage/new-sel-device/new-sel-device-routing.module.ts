import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSelDeviceComponent } from './new-sel-device.component';

const routes: Routes = [
  {
    path: '',
    component: NewSelDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSelDeviceRoutingModule {}
