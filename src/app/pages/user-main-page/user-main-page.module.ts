import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './user-main-page.component';
import { UserMainPageRoutingModule } from './user-main-page-routing.module';
import { HeaderModule } from 'src/app/core/modules/header/header.module';
import { SideBarModule } from 'src/app/core/modules/side-bar/side-bar.module';
import { ShareModule } from 'src/app/shared/module/share.module';

@NgModule({
  declarations: [UserMainPageComponent],
  imports: [
    CommonModule,
    UserMainPageRoutingModule,
    HeaderModule,
    SideBarModule,
    ShareModule,
  ],
})
export class UserMainPageModule {}
