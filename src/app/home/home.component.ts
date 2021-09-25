import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  constructor() { }

  ngOnInit() {
    this.emailChartType = ChartType.Pie;
    this.emailChartData = {
      labels: ['22%', '78%'],
      series: [22, 78]
    };
    this.emailChartLegendItems = [
      { title: 'Ocupado', imageClass: 'fa fa-circle text-danger' },
      { title: 'Livre', imageClass: 'fa fa-circle text-info' }
    ];

    this.activityChartType = ChartType.Bar;
    this.activityChartData = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      series: [
        [1, 9, 1, 5, 5, 1, 2, 5, 4, 5, 7, 2],
        [8, 2, 5, 5, 2, 8, 5, 1, 1, 2, 3, 5]
      ]
    };
    this.activityChartOptions = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.activityChartResponsive = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.activityChartLegendItems = [
      { title: 'Entrada', imageClass: 'fa fa-circle text-info' },
      { title: 'Saida', imageClass: 'fa fa-circle text-danger' }
    ];
  }
}
