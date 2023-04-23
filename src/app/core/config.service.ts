import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class ConfigService {
  public baseApiUrl = "https://6444347090738aa7c0815b6a.mockapi.io/";
  public api = {
    meals: {
      get: "meals",
    },
    diary: {
      get: "diary",
    },
  };

  private applyParams(url: string, params?: object): string {
    if (params) {
      Object.keys(params).forEach(key => {
        // @ts-ignore
        url = url.replace(":" + key, params[key]);
      });
    }
    return url;
  }

  getUrl(url: string, params?: object): string {
    url = this.applyParams(url, params);
    return this.baseApiUrl + url;
  }

  constructor() {}

}
