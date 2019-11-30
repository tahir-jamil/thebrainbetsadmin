import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'ts-xlsx';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  gridOptions: any = {};
  studentList = {};

  columnDefs = [
    { field: 'age' },
    { field: 'athlete' },
    { field: 'bronze' },
    { field: 'country' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'sport' },
    { field: 'total' },
    { field: 'year' },
  ];

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
      columnDefs: this.createColumnDefs(),
      rowDefs: this.studentList,
    };
  }

  private createColumnDefs() {
    return [
      {
        headerName: "Name",
        field: "name",
        width: 400
      },
      {
        headerName: "SSN",
        field: "ssn",
        width: 400,
      }
    ];
  }

  ngOnInit() {
  }

  onGridReady = params => {
    // Following line to make the currently visible columns fit the screen
    params.api.sizeColumnsToFit();

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
      const dataString = jsonData.Sheet1;
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
      const el = document.querySelector("#download");
      el.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
      el.setAttribute("download", 'xlsxtojson.json');
    }, 1000)
  }

}
