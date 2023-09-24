import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainPageRoutingModule } from './admin-main-page-routing.module';
import { HeaderModule } from 'src/app/core/modules/header/header.module';
import { SideBarModule } from 'src/app/core/modules/side-bar/side-bar.module';
import { AdminMainPageComponent } from './admin-main-page.component';
import { ShareModule } from 'src/app/shared/module/share.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AdminMainPageComponent],
  imports: [
    CommonModule,
    AdminMainPageRoutingModule,
    HeaderModule,
    SideBarModule,
    ShareModule,
    DashboardModule,
  ],
})
export class AdminMainPageModule {}
