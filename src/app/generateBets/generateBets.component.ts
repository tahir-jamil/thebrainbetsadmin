import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/core';
import { HttpService } from 'app/services/http.service';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

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
  gridApi;
  predictions = ['1x2', '1x2ht', 'ou05', 'ou25', 'ou15', 'ou05ht', 'ou15ht', 'ggng', 'double_change', 'status_id']

  generateBets = [];
  generateBetsOptions;
  champions;
  modules = AllCommunityModules;
  domLayout = 'autoHeight';

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
      {field: '1x2'},
      {field: '1x2ht'},
      {field: 'Champion'},
      {field: 'Match'},
      {field: 'Sport'},
      {field: 'created_at'},
      {field: 'double_change'},
      {field: 'ggng'},
      {field: 'id'},
      {field: 'match_id'},
      {field: 'ou05'},
      {field: 'ou05ht'},
      {field: 'ou15'},
      {field: 'ou15ht'},
      {field: 'ou25'},
      {field: 'result'},
      {field: 'status_id'}
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

  generateResults() {
    this.httpService.search(this.generateBetsFilters)
    .subscribe((data: any) => {
      this.generateBets = data;
      this.gridApi.refreshCells(this.generateBets);
    }, (error) => {
      console.log(error);
    });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    // Following line to make the currently visible columns fit the screen
    // params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    // params.api.resetRowHeights();
  };
}
