import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSelDeviceRoutingModule } from './edit-sel-device-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditSelDeviceComponent } from './edit-sel-device.component';

@NgModule({
  declarations: [EditSelDeviceComponent],
  imports: [
    CommonModule,
    EditSelDeviceRoutingModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
})
export class EditSelDeviceModule {}
