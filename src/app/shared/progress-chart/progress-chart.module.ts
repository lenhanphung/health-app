import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressChartComponent } from "./progress-chart.component";


@NgModule({
  declarations: [ProgressChartComponent],
  exports: [
    ProgressChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressChartModule { }
