import { Routes } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from '@swimlane/ngx-charts';
import { dematerialize } from 'rxjs';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo4Component } from './demo4/demo4.component';
import { DemotableComponent } from './demotable/demotable.component';

export const routes: Routes = [
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
        path:"table",
        component:DemotableComponent
    }
];
