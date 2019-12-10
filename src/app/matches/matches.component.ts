import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'xlsx';
import { HttpService } from 'app/services/http.service';
import { DataService } from 'app/services/data.service';
import { MatDialog } from '@angular/material';
import { ModelAddPridictionComponent } from './modelAddPridiction/modelAddPridiction.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit, AfterViewInit {

  gridOptions: any = {};
  studentList = {};
  gridApi;
  rowData: any = [];
  modules = AllCommunityModules;
  domLayout = 'autoHeight';

  constructor(private httpService: HttpService, private dataService: DataService, public dialog: MatDialog) {
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
  }
  
  ngAfterViewInit(): void {
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
      { field: 'id' },
      { field: 'Match' },
      { field: 'Datetime' },
      { field: 'Sport' },
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
      { field: 'O15HT' },
    ]

  }


  onGridReady = (params) => {
    this.gridApi = params.api;

    // Following line to make the currently visible columns fit the screen
    // params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    // params.api.resetRowHeights();
    this.onFileChange('ev');
  };

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.openDialog(selectedRows[0])
  }

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


  openDialog(data): void {
    const dialogRef = this.dialog.open(ModelAddPridictionComponent, {
      width: 'auto',
      height: '500px',
      data: {data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
