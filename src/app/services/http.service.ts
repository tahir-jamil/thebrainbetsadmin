import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private finaldata = [];
  private apiurl = 'http://localhost/project_api/task/api.php?';
  constructor(private http: HttpClient) { }

  getPredictions() {
    return this.http.get(this.apiurl+ "get_predictions");
  }
  getMatches() {
    return this.http.get(this.apiurl+ "get_matches");
  }
}
