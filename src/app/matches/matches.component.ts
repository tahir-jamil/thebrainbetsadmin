import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  gridOptions: any = {};
  studentList = {};



  rowData: any = [];
  modules = AllCommunityModules;


  domLayout = 'autoHeight';


  constructor() {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
        width: 100
      },
      columnDefs: this.createColumnDefs(),
      rowDefs: this.studentList,
    };
  }

  private createColumnDefs() {
    return [
      { field: 'Id', width: 40 },
      { field: 'Match', width: 200 },
      { field: 'Datetime' },
      { field: 'Sport',  },
      { field: 'Champion' },
      { field: '1' },
      { field: 'X' },
      { field: '2' },
      { field: 'GG' },
      { field: 'NG' },
      { field: 'U05' },
      { field: 'O05' },
      { field: 'U15' },
      { field: 'O15' },
      { field: 'U25' },
      { field: 'O25' },
      { field: '1X' },
      { field: 'X2' },
      { field: '12' },
      { field: '1HT' },
      { field: 'XHT' },
      { field: '2HT' },
      { field: 'U05HT' },
      { field: 'O05HT' },
      { field: 'U15HT' },
      { field: 'STATUS' },
      { field: 'RESULT' },
      { field: 'O15HT' },
    ];
  }

  ngOnInit() {
  }

  onGridReady = (params) => {
    // Following line to make the currently visible columns fit the screen
    // params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    // params.api.resetRowHeights();
    this.onFileChange('ev');
  };

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = jsonData[Object.keys(jsonData)[0]];
      this.gridOptions.api.setRowData(dataString);

      this.rowData = dataString;
      // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
    }
    reader.readAsBinaryString(file);
  }

}
