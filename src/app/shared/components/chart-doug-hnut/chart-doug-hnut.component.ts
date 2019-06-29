import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-doug-hnut',
  templateUrl: './chart-doug-hnut.component.html',
  styleUrls: ['./chart-doug-hnut.component.less']
})
export class ChartDougHnutComponent {
  
  @Input()
  public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  @Input()
  public doughnutChartData = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  @Input()
  public options = {
    labels:{
      position: 'left'
    }
  }
  
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

}
