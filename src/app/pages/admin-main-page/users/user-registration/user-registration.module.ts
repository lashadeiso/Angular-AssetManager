import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ShareModule } from 'src/app/shared/module/share.module';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ShareModule,
  ],
})
export class UserRegistrationModule {}
