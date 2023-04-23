import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {IndexComponent} from './index.component';
import {HeaderModule} from "../header/header.module"
import {FooterModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
  ],
})
export class IndexModule { }
