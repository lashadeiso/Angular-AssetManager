import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage.component';

const routes: Routes = [
  {
    path: '',
    component: StorageComponent,
    children: [
      {
        path: 'all-selected-devices',
        loadChildren: () =>
          import('./all-sel-devices/all-sel-devices.module').then(
            ({ AllSelDevicesModule }) => AllSelDevicesModule
          ),
      },
      {
        path: 'edit-selected-devices',
        loadChildren: () =>
          import('./edit-sel-device/edit-sel-device.module').then(
            ({ EditSelDeviceModule }) => EditSelDeviceModule
          ),
      },
      {
        path: 'new-selected-devices',
        loadChildren: () =>
          import('./new-sel-device/new-sel-device.module').then(
            ({ NewSelDeviceModule }) => NewSelDeviceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorageRoutingModule {}
