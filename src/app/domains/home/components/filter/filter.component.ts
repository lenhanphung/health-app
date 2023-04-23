import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { HomeService } from "../../services/home-service";

@Component({
  selector: 'app-filter',
  templateUrl : './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  filterMenu: any[] = [
    {
      type : "morning",
      label : "Morning",
      icon: 'knife'
    },
    {
      type : "lunch",
      label : "Lunch",
      icon: 'knife'
    },
    {
      type : "dinner",
      "label" : "Dinner",
      icon: 'knife'
    },
    {
      type : "snack",
      label : "Snack",
      icon: 'cup'
    },
  ];
  filterItems: any[] = [];
  filterList: any[] = [];

  loading!: boolean;
  subscription!: Subscription;

  constructor(
    private homeService: HomeService,
  ) {
  }

  loadMeals() {
    this.loading = true;
    this.subscription = this.homeService.get().subscribe(
      (res: any) => {
        this.filterItems = res;
        this.filterList = res;
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  filter(type: string) {
    this.filterItems = this.filterList.filter(item => item.type === type);
  }

  ngOnInit(): void {
    this.loadMeals();
  }
}
