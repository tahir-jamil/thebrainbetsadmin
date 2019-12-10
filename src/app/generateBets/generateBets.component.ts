import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-generateBets',
  templateUrl: './generateBets.component.html',
  styleUrls: ['./generateBets.component.scss']
})
export class GenerateBetsComponent implements OnInit {

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

  constructor() {
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

}
