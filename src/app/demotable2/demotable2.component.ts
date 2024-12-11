// import { AgGridAngular } from 'ag-grid-angular';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { ColDef,ColGroupDef,ModuleRegistry } from '@ag-grid-community/core';
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-quartz.css';
// import { Component } from '@angular/core';

import { AgGridAngular } from "ag-grid-angular";
import { ColDef, RowSelectionOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Component } from "@angular/core";
import { ServiceTsService } from '../service.ts.service';
import { filter, firstValueFrom } from 'rxjs';

// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Row Data Interface
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}
@Component({
  selector: 'demotable2',
  standalone: true,
  imports: [AgGridAngular,],
  styleUrl: './demotable2.component.scss',
  templateUrl: './demotable2.component.html'
})


export class Demotable2Component {
  addListTableData : any[] = []
  arraydata: any[] = [];
  rowData: IRow[] = [];

    
  themeClass =
      "ag-theme-quartz";

  // Row Data: The data to be displayed.
  // rowData: IRow[] = [];
  
  // Column Definitions: Defines & controls grid columns.
  // colDefs: ColDef<IRow>[] = [{ field: 'Manufacturer', filter: true, floatingFilter: true }, { field: 'Model', filter: true, floatingFilter: true }, { field: 'Sales_in_thousands', filter: true, floatingFilter: true }, { field: 'four_year_resale_value', editable: true, floatingFilter: true }];
  columnDefs=[
    {field:'Manufacturer',filter:true,floatingFilter:true},
    {field:'Model',filter: true, floatingFilter: true},
    {field:'Sales_in_thousands',filter: true, floatingFilter: true},
    {field:'four_year_resale_value',editable: true, floatingFilter: true,headerName: "Four year resale value"}
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
  paginationPageSizeSelector: number[] | boolean = [10, 25, 50];

  async fetchData() {
    console.log("DATA FETCHED");
    try {
      const data1 = await firstValueFrom(this.apiService.fetchData()); 
      this.rowData = data1;
      const Manufacturer=Object.keys(0)
      // this.addListTableData = JSON.parse(JSON.stringify(this.rowData));
      // console.log("ROW",this.rowData);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  constructor(private apiService: ServiceTsService) {this.fetchData()}

}
