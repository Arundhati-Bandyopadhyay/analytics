import { Component } from '@angular/core';
// import {  Input, OnInit, ElementRef } from '@angular/core';

type EChartsOption = echarts.EChartsOption;
import * as echarts from "echarts";
var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

@Component({
  selector: 'linechart',
  standalone: true,
  imports: [],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent {
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

}
