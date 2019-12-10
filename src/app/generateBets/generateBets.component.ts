import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/core';
import { HttpService } from 'app/services/http.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-generateBets',
  templateUrl: './generateBets.component.html',
  styleUrls: ['./generateBets.component.scss']
})
export class GenerateBetsComponent implements OnInit, AfterViewInit {

  generateBetsFilters = {
    'champions': '',
    'minQuote': '',
    'maxQuote': '',
    'numberOfMatches': '',
    'stack': '',
    'kindOfPrediction': ''
  }

  generateBets = [];
  generateBetsOptions;
  champions = [];

  constructor(private httpService: HttpService) {
    this.generateBetsOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createColumnDefs(),
    };

  }

  private createColumnDefs() {
    return [
      { field: 'id' },
      { field: 'name' },
      { field: 'sign' },
      { field: 'isActive' },
    ]
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.fetchChampions();
  }

  fetchChampions() {
    this.httpService.getChampions()
      .subscribe((data) => {
        this.champions = data;
      }, (error) => {
        console.log(error);
      });
  }
}
