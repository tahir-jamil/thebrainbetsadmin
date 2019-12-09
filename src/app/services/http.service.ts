import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiurl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  // predictions
  getPredictions() {
    return this.http.get(this.apiurl + 'get_predictions');
  }


  updatePredictions() {
    const transferObject = {
    }

    // let body = `name=${data.name}&fatherName=${data.fatherName}`;
    // tslint:disable-next-line: max-line-length
    let body2 = {
      "game": "test",
      "datetime": "2019-12-03 00:00:00",
      "sport_id": 1,
      "champion_id": 1,
      "v1": 1,
      "x": 2,
      "v2": 2,
      "v1ht": 2,
      "xht": 2,
      "v2ht": 2,
      "o05": 2,
      "u05": 2,
      "o15": 2,
      "u15": 2,
      "o25": 2,
      "u25": 2,
      "o05ht": 2,
      "u05ht": 2,
      "o15ht": 2,
      "u15ht": 2,
      "gg": 2,
      "ng": 2,
      "v1x": 2,
      "x2": 2,
      "v12": 2,
      "result": "result12345"
    }

    const object = JSON.stringify(body2);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiurl + 'submit_matches', { body: object }, { headers: httpHeaders });
  }




  getChampions() {
    return this.http.get(this.apiurl + 'get_champion');
  }

  getSports() {
    return this.http.get(this.apiurl + 'get_sports');
  }

  getNations() {
    return this.http.get(this.apiurl + 'get_nation');
  }



  // Matches
  getMatches() {
    return this.http.get(this.apiurl + 'get_matches');
  }

  postMatches(element) {

    // tslint:disable-next-line: max-line-length
    let body = `Match=${element.Match}&Datetime=${element.Datetime}&Sport=${element.Sport}&Champion=${element.Champion}&1=${element['1']}&X=${element.X}&2=${element['2']}&GG=${element.GG}&NG=${element.NG}&U05=${element.U05}&O05=${element.O05}&U15=${element.U15}&O15=${element.O15}&U25=${element.U25}&O25=${element.O25}&1X=${element['1X']}&X2=${element['X2']}&12=${element['12']}&1HT=${element['1HT']}&XHT=${element.XHT}&2HT=${element['2HT']}&U05HT=${element.U05HT}&O05HT=${element.O05HT}&U15HT=${element.U15HT}&O15HT=${element.O15HT}&`;

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'post_matches',  body , { headers: httpHeaders });
  }
}
