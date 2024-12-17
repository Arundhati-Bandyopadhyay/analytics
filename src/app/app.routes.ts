import { Routes } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from '@swimlane/ngx-charts';
import { dematerialize } from 'rxjs';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo4Component } from './demo4/demo4.component';
import { DemotableComponent } from './demotable/demotable.component';
import { Demotable2Component } from './demotable2/demotable2.component';
import { FirebaseLoginComponent } from './firebase-login/firebase-login.component';
import { CharttableComponent } from './charttable/charttable.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full' 
       
    // },
    {
   path:"",
   component:LoginComponent
    },
    {
        path:"demo",
        component:DemoComponent
    }, {
        path:"demo2",
        component:Demo2Component
    },
    {
        path:"demo4",
        component:Demo4Component
    },
    {
        path:"demo5",
        component:Demotable2Component
    },
    {
        path:"table",
        component:DemotableComponent
    },
   {
        path:"charttable",
        component:CharttableComponent
    },{
        path:"SidenavbarComponent",
        component:SidenavbarComponent
    }
    ,{
        path:"nav",
        component:NavComponent
    }
];
