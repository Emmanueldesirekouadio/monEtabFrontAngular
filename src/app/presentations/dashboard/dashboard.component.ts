import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public chart: any;

  constructor() { }
  
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart
      // type: 'doughnut',

      data: {// values on X-Axis
        labels: [
          "Hommes",
          "Femmes"
        ], 
	       datasets: [
          { label: "", data: [9168.2, 1417.8],},]
      },
      options: { aspectRatio:2.5}
    });}

}
