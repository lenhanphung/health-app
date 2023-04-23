import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import _default from "chart.js/dist/core/core.interaction";
import x = _default.modes.x;

@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent {

  @Input() dataChart: any;

  constructor() {}

  ngOnInit() {

    const labelPlugin = {
      id: 'myProgressChart',
      afterRender: (chart: any, args: any, options: any) => {
        const { ctx } = chart;
        ctx.save();
        let bottom = chart.scales.x.bottom;
        let yPos = chart.scales.x.maxWidth / 12 ;

        chart.data.labels.forEach((l: any, i: any) => {
          let yPos = chart.scales.x.getPixelForTick(i);
          ctx.font = '12px Inter';
          ctx.fillStyle = '#fff';
          ctx.fillText(l + ' ', yPos - 10, bottom - 2);
          ctx.textAlign = 'left';
          ctx.font = '9px Hiragino';
          ctx.fillStyle = '#fff';
          ctx.fillText('月' + ' ', yPos - 10 + (l < 9 ? 10 : 15), bottom - 2);
        });
        ctx.restore();
      }
    };


    const myProgressChart = new Chart('myProgressChart', {
      type: 'line',
      data: {
        labels: [
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "1",
          "2",
          "3",
          "4",
          "5",
        ],
        datasets: this.dataChart
      },
      options: {
        events: [],
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          y: {
            border: {
              display: false
            },
            suggestedMax: 100,
            suggestedMin: 0,
            grid: {
              display: false,
            },
            ticks: {
              callback: function(value, index, ticks) {
                return '';
              }
            }
          },
          x: {
            border: {
              display: false
            },
            grid: {
              color: '#777',
            },
            ticks: {
              stepSize: 10,
              color: '#fff',
              font: {
                size: 12
              },
              callback: function(value, index, ticks) {
                return '';
              }
            },
          }
        }
      },
      plugins: [labelPlugin]
    });
  }

}
