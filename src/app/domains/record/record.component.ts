import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {RecordService} from "./services/record.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  diaryLoading: boolean = true;
  diaryItems: any[] = [];
  subscription!: Subscription;
  dataChart = [
    {
      data: [65, 60, 50, 45, 67, 58, 47, 45, 33, 30, 45, 30],
      fill: false,
      borderColor: "#FFCC21",
      borderWidth: 4,
      pointRadius: 2
    },
    {
      data: [75, 68, 52, 46, 62, 52, 22, 54, 15, 36, 42, 30],
      fill: false,
      borderColor: "#8FE9D0",
      borderWidth: 4,
      pointRadius: 2
    },
  ];

  constructor(
    private recordService: RecordService,
  ) {
  }

  loadDiary() {
    this.diaryLoading = true;
    this.subscription = this.recordService.get().subscribe(
      (res: any) => {
        this.diaryItems = res;
        this.diaryLoading = false;
      },
      (error: any) => {
        this.diaryLoading = false;
      },
      () => {
        this.diaryLoading = false;
      }
    );
  }

  scrollToMyTargetDiv(targetId: string) {
    const element = document.getElementById(targetId);
    if(element) {
      window.scrollTo({ top: element.getClientRects()[0].y, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.loadDiary();
  }

}
