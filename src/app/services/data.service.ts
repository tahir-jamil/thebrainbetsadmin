import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private predictionsData;
  private matchesData;

  constructor() { }

  setPredictionsData(data) {
    this.predictionsData = data;
  }

  getPredictionsData() {
    return this.predictionsData;
  }

  setmatchesData(data) {
    this.matchesData = data;
  }

  getmatchesData() {
    return this.matchesData;
  }
}
