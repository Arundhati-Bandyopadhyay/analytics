import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { Component, computed, Input, input, signal } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import {MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../page-header/page-header.component';

type MenuItem={
  icon:String;
  label:string;
  route:string
}

@Component({
  selector: 'sidenavbar',
  standalone: true,
  imports: [CommonModule,MatSidenav,MatSidenavModule,
    MatToolbarModule,MatButtonModule,FormsModule
    ,MatIconModule,MatListModule,RouterModule,PageHeaderComponent],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {
  sidnavcollapsed=signal(false);
  @Input() set navcollapsed(val: boolean){
    this.sidnavcollapsed.set(val)

  }
  collapsed=signal(false)
  logo=computed(()=>this.sidnavcollapsed()?'100':'10000')
  sidenavwith=computed(()=>this.collapsed()?'65px':'250px')
menuItems=signal<MenuItem[]>([
  {

    icon:"analytics",
    label:"Analytics",
    route:"demo"
  },{
    icon:"analytics",
    label:"Analytics2",
    route:"demo4"
  },
  {
    icon:"dashboard",
    label:"Dashboard",
    route:"demo2"

  },
  {
    icon:"view_array",
    label:"Table Data",
    route:"table"
  },
  {
    icon:"view_array",
    label:"Table  Data 2",
    route:"demo5"
  }
])
}
