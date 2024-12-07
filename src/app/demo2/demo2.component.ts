import { Component ,OnInit} from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@Component({
  selector: 'demo2',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  chartOptions = {
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 10 },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]                
  };
}
