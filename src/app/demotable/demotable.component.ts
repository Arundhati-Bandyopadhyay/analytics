
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule } from '@angular/material/icon'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceTsService } from '../service.ts.service';
import { firstValueFrom } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
//import Swal from 'sweetalert2';

@Component({
  selector: 'demotable',
  standalone: true,
  imports: [MatIconModule,MatTableModule],
  templateUrl: './demotable.component.html',
  styleUrl: './demotable.component.scss'
})


export class DemotableComponent {
  addListTableData : any[] = []
  arraydata: any[] = [];
  dataSourceTableData!: MatTableDataSource<any>;
  displayedColums: string[] = ['Manufacturer','Model'];

  @ViewChild(MatPaginator, { static: true }) paginatorForGemBidDashboard!: MatPaginator
  constructor(private apiService: ServiceTsService) {this.fetchData()}
  async fetchData() {
    try {
      const data1 = await firstValueFrom(this.apiService.fetchData()); 
      this.arraydata = data1;
      this.addListTableData = JSON.parse(JSON.stringify(this.arraydata));
      this.dataSourceTableData = new MatTableDataSource(this.addListTableData);
      //console.log(this.arraydata.map(item => item.Vehicle_type))
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  

  

}
