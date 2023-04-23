import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from "./record-routing.module";
import {HeaderModule} from "../../layout/components/header/header.module";
import {FooterModule} from "../../layout/components/footer/footer.module";
import {ProgressChartModule} from "../../shared/progress-chart/progress-chart.module";
import {LoadingModule} from "../../shared/loading/loading.module";

@NgModule({
  declarations: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    HeaderModule,
    FooterModule,
    ProgressChartModule,
    LoadingModule
  ]
})
export class RecordModule { }
