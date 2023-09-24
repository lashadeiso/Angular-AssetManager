import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOwnerOfSelDeviceRoutingModule } from './new-owner-of-sel-dev-routing.module';
import { NewOwnerOfSelDevComponent } from './new-owner-of-sel-dev.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewOwnerOfSelDevComponent],
  imports: [
    CommonModule,
    NewOwnerOfSelDeviceRoutingModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class NewOwnerOfSelDevModule {}
