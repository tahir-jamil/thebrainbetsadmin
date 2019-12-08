import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'xlsx';
import { HttpService } from 'app/services/http.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.css']
})
export class NationsComponent implements OnInit {

  gridOptions: any = {};
  studentList = {};

  rowData: any = [];
  modules = AllCommunityModules;


  domLayout = 'autoHeight';


  constructor(private httpService: HttpService, private dataService: DataService) {
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


  ngOnInit() {
    this.fetchMatches();
  }

  fetchMatches() {
    this.httpService.getMatches()
      .subscribe((data) => {
        this.rowData = data;
        this.dataService.setmatchesData(data);
        // this.filterData(this.rowData);
        console.log(this.rowData);
      }, (error) => {
        console.log(error);
      });
  }

  private createColumnDefs() {
    return [
      { field: '1' },
      { field: '1ht' },
      { field: '1x' },
      { field: '2' },
      { field: '2ht' },
      { field: '12' },
      { field: 'champion' },
      { field: 'datetime' },
      { field: 'game' },
      { field: 'gg' },
      { field: 'id' },
      { field: 'ng' },
      { field: 'o05' },
      { field: 'o05ht' },
      { field: 'o15' },
      { field: 'o15ht' },
      { field: 'o25' },
      { field: 'result' },
      { field: 'sport_id' },
      { field: 'u05' },
      { field: 'u05ht' },
      { field: 'u15' },
      { field: 'u15ht' },
      { field: 'u25' },
      { field: 'x' },
      { field: 'x2' },
      { field: 'xht' },
    ]
    // [
    //   { field: 'Id', width: 40 },
    //   { field: 'Match', width: 200 },
    //   { field: 'Datetime' },
    //   { field: 'Sport', },
    //   { field: 'Champion' },
    //   { field: '1' },
    //   { field: 'X' },
    //   { field: '2' },
    //   { field: 'GG' },
    //   { field: 'NG' },
    //   { field: 'U05' },
    //   { field: 'O05' },
    //   { field: 'U15' },
    //   { field: 'O15' },
    //   { field: 'U25' },
    //   { field: 'O25' },
    //   { field: '1X' },
    //   { field: 'X2' },
    //   { field: '12' },
    //   { field: '1HT' },
    //   { field: 'XHT' },
    //   { field: '2HT' },
    //   { field: 'U05HT' },
    //   { field: 'O05HT' },
    //   { field: 'U15HT' },
    //   { field: 'STATUS' },
    //   { field: 'RESULT' },
    //   { field: 'O15HT' },
    // ];
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


  filterData(data) {
    data.filter((item) => {
      if (item.Champion === "ACAFL") {
        item.Champion = 1;
      }
    })
  }


}
