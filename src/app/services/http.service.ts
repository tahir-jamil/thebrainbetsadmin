import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private finaldata = [];
  private apiurl = 'http://127.0.0.1/task/api.php/?';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl+ "predictions");
  }
}
