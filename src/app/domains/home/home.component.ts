import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}

  dataChart = [
    {
      data: [65, 60, 50, 45, 67, 58, 47, 45, 33, 30, 45, 30],
      fill: false,
      borderColor: "#FFCC21",
      borderWidth: 4,
      pointRadius: 2
    },
    {
      data: [75, 68, 52, 46, 62, 52, 22, 54, 15, 36, 42, 30],
      fill: false,
      borderColor: "#8FE9D0",
      borderWidth: 4,
      pointRadius: 2
    },
  ];

  ngOnInit() {

  }
}
