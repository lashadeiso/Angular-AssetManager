import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  pieChartData: ChartData<'pie'> = {
    labels: ['headsets', 'laptops', 'monitors', 'windows-pcs'],
    datasets: [
      {
        data: [50, 70, 90, 60],
      },
    ],
  };
  dashboardWidgets = [
    {
      title: 'Headset',
      content: '54',
      icon: 'headset',
      color: this.getRandomLightColor(),
    },
    {
      title: 'Monitore',
      content: '120',
      icon: 'monitore',
      color: this.getRandomLightColor(),
    },
    {
      title: 'Keyboard',
      content: '120',
      icon: 'keyboard',
      color: this.getRandomLightColor(),
    },
    {
      title: 'Mouse',
      content: '500',
      icon: 'mouse',
      color: this.getRandomLightColor(),
    },
    {
      title: 'Lan Cable',
      content: '340',
      icon: 'cable',
      color: this.getRandomLightColor(),
    },
    {
      title: 'Routers',
      content: '30',
      icon: 'router',
      color: this.getRandomLightColor(),
    },
  ];

  getRandomLightColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const colorString = `rgb(${r}, ${g}, ${b})`;

    return colorString;
  }
}
