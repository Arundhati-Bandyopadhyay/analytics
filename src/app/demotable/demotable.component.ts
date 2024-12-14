
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
  imports: [],
  templateUrl: './demotable.component.html',
  styleUrl: './demotable.component.scss'
})


export class DemotableComponent {


  

}
