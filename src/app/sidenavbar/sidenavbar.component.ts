import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { Component, ViewChild, computed, Input, input, signal } from '@angular/core';
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
import { BreakpointObserver } from '@angular/cdk/layout';

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
  isCollapsed: boolean = false;
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile: boolean = true;

  constructor(private observer: BreakpointObserver) {}
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
        console.log("mobile: ",this.isMobile);
      } else {
        this.isMobile = false;
        console.log("mobile: ",this.isMobile);
      }
    });
  }
  
  async toggleMenu() {
    if(this.isMobile){
      // this.sidenav.toggle();
      this.isCollapsed = true; // On mobile, the menu can never be collapsed
      console.log("Mobile seetings----");
      console.log("Toggle is: ", this.sidenav.toggle());
      console.log("isCollapsed ",this.isCollapsed);
    } else {
      this.sidenav.toggle(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
      console.log("Non-Mobile seetings----");
      console.log("Toggle is: ", this.sidenav.toggle());
      console.log("isCollapsed ",this.isCollapsed);
    }
  }
  
  // -----------------------
  // sidnavcollapsed=signal(false);
  // @Input() set navcollapsed(val: boolean){
  //   this.sidnavcollapsed.set(val)
  // }
  // collapsed=signal(false)
  // logo=computed(()=>this.sidnavcollapsed()?'100':'10000')
  // sidenavwith=computed(()=>this.collapsed()?'65px':'250px')

  menuItems=signal<MenuItem[]>([
  {
    icon:"analytics",
    label:"Weekly Sales",
    route:"demo"
  },
  {
    icon:"analytics",
    label:"Analytics2",
    route:"demo4"
  },
  {
    icon:"dashboard",
    label:"Sales by Model",
    route:"demo2"

  },
  {
    icon:"view_array",
    label:"Table Data",
    route:"table"
  },
  {
    icon:"view_array",
    label:"Raw sales",
    route:"demo5"
  }
])
}
