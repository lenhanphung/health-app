import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./layout/components/index/index.component";
import {HomeModule} from "./domains/home/home.module";
import {RecordModule} from "./domains/record/record.module";
import {RecommenderModule} from "./domains/recommender/recommender.module";


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./domains/home/home.module").then(m => m.HomeModule),
      },
      {
        path: "record",
        loadChildren: () => import("./domains/record/record.module").then(m => m.RecordModule),
      },
      {
        path: "recommender",
        loadChildren: () => import("./domains/recommender/recommender.module").then(m => m.RecommenderModule),
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
