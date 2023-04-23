import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from "./recommender.component";
import {HeaderModule} from "../../layout/components/header/header.module";
import {FooterModule} from "../../layout/components/footer/footer.module";
import {RecommenderRoutingModule} from "./recommender-routing.module";

@NgModule({
  declarations: [
    RecommenderComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RecommenderRoutingModule
  ]
})
export class RecommenderModule { }
