
import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from '../custom-echart';
import { ServiceTsService } from '../service.ts.service';
import { firstValueFrom } from 'rxjs';
import { BarChart } from 'echarts/charts';
import { UntypedFormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, RowSelectionOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { filter } from 'rxjs';
import { PieChart } from 'echarts/charts';
echarts.use([PieChart]);


import { LegendComponent } from 'echarts/components';
echarts.use([LegendComponent]);
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'demotable',
  standalone: true,
  imports: [NgxEchartsDirective,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './demotable.component.html',
  styleUrl: './demotable.component.scss',
  providers: [provideEchartsCore({ echarts })],
})





export class DemotableComponent {

  Charts=new FormGroup({
    chartType:new FormControl('chartType')
  })
  bar:boolean = false
  line:boolean = false
  linebar:boolean=false
  pie:boolean=false

  charts!: UntypedFormGroup;
  arraydata: any[] = [];
  options: any = {};
  options2: any = {};
  options3: any = {};
  options4: any = {};
  constructor(private apiService: ServiceTsService) {this.fetchData()}
  selectType(){
    if (this.Charts.controls['chartType'].value=='BAR') {
      //console.log(this.Charts.controls['chartType'].value);
      
      this.bar=true
      this.line=false
      this.pie=false
    } else if (this.Charts.controls['chartType'].value=='LINE'){
      this.line=true
      this.bar=false
      this.pie=false
    }else if (this.Charts.controls['chartType'].value=='PIE'){
      this.line=false
      this.bar=false
      this.pie=true
    }
  }
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
      this.options3 = {
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
          
        ]
      };
      
      this.options4 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
      ;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
