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

  predictions = ['1x2', '1x2ht', 'ou05', 'ou25', 'ou15', 'ou05ht', 'ou15ht', 'ggng', 'double_change', 'status_id']

  generateBets = [];
  generateBetsOptions;
  champions;

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

  onGridReady = (params) => {
    // Following line to make the currently visible columns fit the screen
    // params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    // params.api.resetRowHeights();
  };
}
