import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSelDevicesRoutingModule } from './all-sel-devices-routing.module';
import { AllSelDevicesComponent } from './all-sel-devices.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [AllSelDevicesComponent],
  imports: [CommonModule, AllSelDevicesRoutingModule, TableModule],
})
export class AllSelDevicesModule {}
