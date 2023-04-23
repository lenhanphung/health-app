import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {HeaderModule} from "../../layout/components/header/header.module";
import {FooterModule} from "../../layout/components/footer/footer.module";
import {ProgressModule} from "./components/progress/progress.module";
import {ProgressChartModule} from "../../shared/progress-chart/progress-chart.module";
import {FilterModule} from "./components/filter/filter.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    ProgressModule,
    ProgressChartModule,
    FilterModule
  ]
})
export class HomeModule {}
