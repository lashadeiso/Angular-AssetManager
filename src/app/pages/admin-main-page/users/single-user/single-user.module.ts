import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SingleUserRoutingModule } from './single-user-routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SingleUserComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    SingleUserRoutingModule,
  ],
})
export class SingleUserModule {}
