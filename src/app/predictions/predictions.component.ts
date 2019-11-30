import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  gridOptions: any = {};
  studentList = {};



  rowData: any = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  modules = AllCommunityModules;


  domLayout = 'autoHeight';


  constructor() {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createColumnDefs(),
      rowDefs: this.studentList,
    };
  }

  private createColumnDefs() {
    return [
      { field: 'Id', width: 40 },
      { field: 'Match', },
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

  onGridReady = params => {
    // Following line to make the currently visible columns fit the screen
    params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    params.api.resetRowHeights();
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
      this.setDownload(dataString);
    }
    reader.readAsBinaryString(file);
  }


  setDownload(data) {
    // this.willDownload = true;
    setTimeout(() => {
      const el = document.querySelector('#download');
      el.setAttribute('href', `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
      el.setAttribute('download', 'xlsxtojson.json');
    }, 1000)
  }

}
