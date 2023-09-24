import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { TreeButtonComponent } from 'src/app/shared/components/tree-button/tree-button.component';

@NgModule({
  declarations: [SideBarComponent, TreeButtonComponent],
  imports: [CommonModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
