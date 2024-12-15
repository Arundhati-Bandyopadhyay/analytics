import { Component } from '@angular/core';
import { MockServerService } from '../MockServerService';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from '../custom-echart';
import { RouterLink, RouterOutlet } from '@angular/router'
import { Demo2Component } from '../demo2/demo2.component';

@Component({
  selector: 'demo',
  standalone: true,
  imports: [NgxEchartsDirective,Demo2Component],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  providers: [provideEchartsCore({ echarts })],
})

export class DemoComponent {
  
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  
  // option && myChart.setOption(option);
  
  
  options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  mergeOption: any;
  loading = false;

  constructor(private api: MockServerService) {}

  getData() {
    
    this.loading = true;
    this.api
      .getData()
      .then((data) => {
        this.mergeOption = { series: [{ data }] };
      })
      .then(() => {
        this.loading = false;
      });
  }
  
}