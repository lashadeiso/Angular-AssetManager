import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSelDeviceRoutingModule } from './new-sel-device-routing.module';
import { NewSelDeviceComponent } from './new-sel-device.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NewSelDeviceComponent],
  imports: [
    CommonModule,
    NewSelDeviceRoutingModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class NewSelDeviceModule {}
