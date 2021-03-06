import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  postPredictions(prediction) {
    // tslint:disable-next-line: max-line-length
    let body = `match_id=${prediction.match_id}&user_id=${prediction.user_id}&Match=${prediction.Match}&ou25=${prediction.value_ou25}&1x2=${prediction.value_1x2}&1x2ht=${prediction.value_1x2ht}&ou05=${prediction.value_ou05}&ou15=${prediction.value_ou15}&ou05ht=${prediction.value_ou05ht}&ou15ht=${prediction.value_ou15ht}&ggng=${prediction.value_ggng}&double_change=${prediction.double_change}&result=${prediction.result}&status_id=${prediction.status_id}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'post_predictions', body, { headers: httpHeaders });
  }

  updatePredictions(prediction) {
    // tslint:disable-next-line: max-line-length
    let body = `id=${prediction.id}&match_id=${prediction.match_id}&user_id=${prediction.user_id}&Match=${prediction.Match}&ou25=${prediction.value_ou25}&1x2=${prediction['value_1x2']}&1x2ht=${prediction['value_1x2ht']}&ou05=${prediction.value_ou05}&ou15=${prediction.value_ou15}&ou05ht=${prediction.value_ou05ht}&ou15ht=${prediction.value_ou15ht}&ggng=${prediction.value_ggng}&result=${prediction.result}&double_change=${prediction.double_change}&status_id=${prediction.status_id}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'update_predictions/', body, { headers: httpHeaders });
  }



  // accounts

  getChampions() {
    return this.http.get(this.apiurl + 'get_champions');
  }

  getSports() {
    return this.http.get(this.apiurl + 'get_sports');
  }

  getNations() {
    return this.http.get(this.apiurl + 'get_nations');
  }

  postChampions(data) {
    // tslint:disable-next-line: max-line-length
    let body = `name=${data.name}&nation_id=${data.nation_id}&sign=${data.sign}&isActive=${data.isActive}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'post_champion', body, { headers: httpHeaders });
  }

  postSports(data) {
    // tslint:disable-next-line: max-line-length
    let body = `name=${data.name}&sign=${data.sign}&isActive=${data.isActive}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'post_sport', body, { headers: httpHeaders });
  }

  postNations(data) {
    // tslint:disable-next-line: max-line-length
    let body = `name=${data.name}&sign=${data.sign}&isActive=${data.isActive}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'post_nation', body, { headers: httpHeaders });
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

    return this.http.post(this.apiurl + 'post_matches', body, { headers: httpHeaders });
  }

  search(filter) {
    // tslint:disable-next-line: max-line-length
    const body = `Champion=${filter.champions}&minQuote=${filter.minQuote}&maxQuote=${filter.maxQuotes}&numberOfMatches=${filter.numberOfMatches}&stack=${filter.stack}&kindOfPrediction=${filter.kindOfPrediction}`;

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.apiurl + 'search', body, { headers: httpHeaders });
  }
}
