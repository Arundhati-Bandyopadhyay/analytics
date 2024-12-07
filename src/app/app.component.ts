import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent,SidenavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AdminPanel';
  
}
