import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecommenderComponent } from "./recommender.component";

const routes: Routes = [
  {
    path: "",
    component: RecommenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommenderRoutingModule {}
