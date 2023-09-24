import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumnLabels } from 'src/app/core/models/users/tableColumnLabels.interface';
import { EquipmentData } from '../../../core/models/unions/equipmentData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() displayedColumns!: string[];
  @Input() columnLabels!: TableColumnLabels;
  @Input() allEquipment: EquipmentData[] = [];
  @Input() dataSource = new MatTableDataSource<EquipmentData>();

  @Output() deleteItem: EventEmitter<EquipmentData> = new EventEmitter();
  @Output() editItem: EventEmitter<EquipmentData> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDeleteItem(row: EquipmentData) {
    this.deleteItem.emit(row);
  }

  onEditItem(row: EquipmentData) {
    this.editItem.emit(row);
  }
}
