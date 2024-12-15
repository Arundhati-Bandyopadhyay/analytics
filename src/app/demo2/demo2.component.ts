import { Component } from '@angular/core';

import { AgCharts } from 'ag-charts-angular';

import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'demo2',
  standalone: true,
  imports: [AgCharts,],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})


export class Demo2Component {
  // Chart Options
  public chartOptions: AgChartOptions;
  chartoptions: any = {};
  constructor() {
    this.chartOptions = {
    
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 900000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales',fill:'#00008B' }],
      
    };
    this.chartoptions = {
    
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 900000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [
        // {
        //   type: 'pie',
        //   angleKey: 'iceCreamSales',
        //   categoryKey: 'month',
        //   calloutLabelKey: 'month',
        // sectorLabelKey: 'iceCreamSales',
        //   label: {
        //     enabled: true,
        //     formatter: (params: { category: any; value: any; }) => {
        //       return `${params.category}: ${params.value}`;
        //     }
        //   }
        // }
{
        type: "pie",
        angleKey: "iceCreamSales",
        calloutLabelKey: "month",
        sectorLabelKey: "iceCreamSales",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: (params: { category: any; value: any; }) => {
                   return `${params.category}: ${params.value}`;
                 }
        },

      }
      ],
      
    };
  }

 
  


}
