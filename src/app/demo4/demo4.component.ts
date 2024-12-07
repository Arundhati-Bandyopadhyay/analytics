import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from '../custom-echart';
import { ServiceTsService } from '../service.ts.service';
import { firstValueFrom } from 'rxjs';
import { BarChart } from 'echarts/charts';

echarts.use([BarChart]);

@Component({
  selector: 'demo4',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss',
  providers: [provideEchartsCore({ echarts })],
})

export class Demo4Component {
  arraydata: any[] = [];
  options: any = {};
  options2: any = {};
  constructor(private apiService: ServiceTsService) {this.fetchData()}
  async fetchData() {
    try {
      const data1 = await firstValueFrom(this.apiService.fetchData()); 
      this.arraydata = data1;
      console.log(this.arraydata.map(item => item.Vehicle_type))
      this.options = {
        title: {
          text: 'Sales Over Time'
        },
        xAxis: {
          type: 'category',
          data: this.arraydata.map(item => item.Model)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.arraydata.map(item => item.four_year_resale_value),
            type: 'bar'
          }
        ]
      };
      this.options2 = {
        title: {
          text: 'Sales Over Time'
        },
        xAxis: {
          type: 'category',
          data: this.arraydata.map(item => item.Model)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.arraydata.map(item => item.four_year_resale_value),
            type: 'line'
          },
          {
            data: this.arraydata.map(item => item.four_year_resale_value),
            type: 'bar'
          }
        ]
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
