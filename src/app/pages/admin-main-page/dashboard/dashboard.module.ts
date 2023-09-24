import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from 'src/app/shared/components/pie-chart/pie-chart.component';
import { WidgetComponent } from 'src/app/shared/components/widget/widget.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PieChartComponent,
    WidgetComponent,
    LineChartComponent,
  ],
  imports: [CommonModule, NgChartsModule, MatCardModule, MatIconModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
