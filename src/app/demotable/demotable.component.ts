
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServiceTsService } from '../service.ts.service';
import { firstValueFrom } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'
import {  MatSortModule} from '@angular/material/sort';
//import Swal from 'sweetalert2';

@Component({
  selector: 'demotable',
  standalone: true,
  imports: [MatIconModule,MatTableModule,MatSort,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule],
  templateUrl: './demotable.component.html',
  styleUrl: './demotable.component.scss'
})


export class DemotableComponent {
  addListTableData : any[] = []
  arraydata: any[] = [];
  dataSourceTableData!: MatTableDataSource<any>;
  displayedColums: string[] = ['Manufacturer','Model','four_year_resale_value','Sales_in_thousands'];

  @ViewChild(MatPaginator, { static: true }) paginatorFordata!: MatPaginator
  constructor(private apiService: ServiceTsService) {this.fetchData()}
  async fetchData() {
    try {
      const data1 = await firstValueFrom(this.apiService.fetchData()); 
      this.arraydata = data1;
      this.addListTableData = JSON.parse(JSON.stringify(this.arraydata));
      this.dataSourceTableData = new MatTableDataSource(this.addListTableData);
      this.dataSourceTableData.paginator = this.paginatorFordata
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTableData.filter = filterValue.trim().toLowerCase();
  }
  

  

}
