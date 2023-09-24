import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditOwnerOfSelDeviceRoutingModule } from './edit-owner-of-sel-dev-routing.module';
import { EditOwnerOfSelDevComponent } from './edit-owner-of-sel-dev.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditOwnerOfSelDevComponent],
  imports: [
    CommonModule,
    EditOwnerOfSelDeviceRoutingModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
})
export class EditOwnerOfSelDevModule {}
