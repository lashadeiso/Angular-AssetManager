import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrls: ['./export-to-excel.component.scss'],
})
export class ExportToExcelComponent {
  @Input() data: any;

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);

    // Set column widths for all columns (e.g., 15 characters wide)
    const defaultColumnWidth = 15;
    const columnWidths = [];

    // Calculate the width for each column (assuming all columns have the same width)
    for (let i = 0; i < this.data.length; i++) {
      columnWidths.push({ wch: defaultColumnWidth });
    }

    // Apply column widths to the worksheet
    ws['!cols'] = columnWidths;

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // You can choose the file format (e.g., XLSX or CSV)
    XLSX.writeFile(wb, 'exported-data.xlsx');
  }
}
