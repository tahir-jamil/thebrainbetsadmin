import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  predictionsData;

  constructor() { }

  setPredictionsData(data) {
    this.predictionsData = data;
  }

  getPredictionsData() {
    return this.predictionsData;
  }
}
