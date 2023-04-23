import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent {

  @Input() percent: number = 75;

  constructor() {}

  ngOnInit() {

    const ShadowPlugin = {
      id: 'myDoughnutChart',
      beforeDraw: (chart: any, args: any, options: any) => {
        const { ctx } = chart;
        ctx.shadowColor = "rgba(252, 116, 0, 1)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      },
    };

    const myDoughnutChart = new Chart('myDoughnutChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.percent, 100 - this.percent],
          backgroundColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        cutout: '98%',
      },
      plugins: [ShadowPlugin]
    });
  }

}

