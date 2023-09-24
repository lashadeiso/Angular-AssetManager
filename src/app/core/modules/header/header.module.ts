import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ShareModule } from 'src/app/shared/module/share.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatMenuModule, ShareModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
