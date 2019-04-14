import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

   }

   public getFileList(path) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin": 'http://localhost:8081'
      })
    };
    const url: string = "http://localhost:8081/list-dir?path="+path;
    return this.http.get(url, httpOptions);
    

   }
}
