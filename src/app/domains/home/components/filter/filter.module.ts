import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "./filter.component";
import {LoadingModule} from "../../../../shared/loading/loading.module";


@NgModule({
  declarations: [FilterComponent],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    LoadingModule
  ]
})
export class FilterModule { }
