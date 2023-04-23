import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigService } from "../../../core/config.service";

@Injectable({
  providedIn: "root"
})

export class RecordService {

  constructor(private http: HttpClient, private cfs: ConfigService) {}

  get(): Observable<any> {
    return this.http.get<any>(
      this.cfs.getUrl(this.cfs.api.diary.get)
    );
  }

}
