import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from '../custom-echart';
import { ServiceTsService } from '../service.ts.service';
import { filter, firstValueFrom } from 'rxjs';
import { BarChart } from 'echarts/charts';
import { UntypedFormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PieChart } from 'echarts/charts';
echarts.use([PieChart]);

import { AgGridAngular } from "ag-grid-angular";
import { ColDef, RowSelectionOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { LegendComponent } from 'echarts/components';
echarts.use([LegendComponent]);
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}


@Component({
  selector: 'charttable',
  standalone: true,
  imports: [NgxEchartsDirective,FormsModule,ReactiveFormsModule,CommonModule,AgGridAngular],
  templateUrl: './charttable.component.html',
  styleUrl: './charttable.component.scss',
  providers: [provideEchartsCore({ echarts })],
})



export class CharttableComponent {

  Charts=new FormGroup({
    chartType:new FormControl('chartType')
  })
  bar:boolean = false
  line:boolean = false
  linebar:boolean=false
  pie:boolean=false

  autoHeight = true;
  addListTableData : any[] = []
  arraydata: any[] = [];
  rowData: IRow[] = [];

    
  themeClass =
      "ag-theme-quartz";
  
  charts!: UntypedFormGroup;
  options: any = {};
  options2: any = {};
  options3: any = {};
  options4: any = {};
  constructor(private apiService: ServiceTsService) {this.fetchData()}
  columnDefs=[
    {field:'Manufacturer',filter:true,floatingFilter:true},
    {field:'Model',filter: true, floatingFilter: true},
    {field:'Sales_in_thousands',filter: true, floatingFilter: true,headerName:"Sales in thousands"},
    {field:'four_year_resale_value',editable: true,filter:true, floatingFilter: true,headerName: "Four year resale value"}
  ]

  defaultColDef: ColDef = {
      flex: 1,
  };
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    headerCheckbox: false,
  };

  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector: number[] | boolean = [5, 10, 25, 50];


  async fetchData() {
    try {
      const data1 = await firstValueFrom(this.apiService.fetchData()); 
      this.arraydata = data1;
      this.rowData=data1
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
