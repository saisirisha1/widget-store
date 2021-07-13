import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {
    // url = 'http://70.113.42.250:4000/api/v2/dummy'
  url =  'http://70.113.42.250:4000/demo2.json'
  constructor(private http: HttpClient) { }
  addWidgets(qParma){
     return this.http.post(this.url,{qParma});
  }

}
