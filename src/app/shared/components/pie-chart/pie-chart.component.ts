import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  constructor(private _router: Router) {}

  pieChartType: ChartType = 'pie';

  @Input() pieChartData!: ChartData<'pie'>;

  onSegmentClick(event: any) {
    if (event.active.length > 0 && this.pieChartData.labels) {
      const clickedSegmentIndex = event.active[0].index;
      this._router.navigate([`main/storage/all-selected-devices`], {
        queryParams: {
          selDev: this.pieChartData.labels[clickedSegmentIndex],
        },
      });
    }
  }
}
