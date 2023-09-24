import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOwnersOfSelDeviceRoutingModule } from './all-owners-of-sel-dev-routing.module';
import { AllOwnersOfSelDevComponent } from './all-owners-of-sel-dev.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [AllOwnersOfSelDevComponent],
  imports: [CommonModule, AllOwnersOfSelDeviceRoutingModule, TableModule],
})
export class AllOwnersOfSelDevModule {}
