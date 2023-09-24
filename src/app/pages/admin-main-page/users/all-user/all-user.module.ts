import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserRoutingModule } from './all-user-routing.module';
import { AllUserComponent } from './all-user.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ExportToExcelComponent } from 'src/app/shared/components/export-to-excel/export-to-excel.component';
import { ExportToPdfComponent } from 'src/app/shared/components/export-to-pdf/export-to-pdf.component';

@NgModule({
  declarations: [
    AllUserComponent,
    ExportToExcelComponent,
    ExportToPdfComponent,
  ],
  imports: [CommonModule, AllUserRoutingModule, TableModule],
  exports: [ExportToExcelComponent, ExportToPdfComponent],
})
export class AllUserModule {}
