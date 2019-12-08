import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import * as XLSX from 'ts-xlsx';
import { HttpService } from 'app/services/http.service';
import { DataService } from 'app/services/data.service';
function CountryCellRenderer(params) {
  return params.value.name;
}
@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit, AfterViewInit {

  gridOptions: any = {};
  private gridApi;

  rowData: any = []
  modules = AllCommunityModules;
  private frameworkComponents;

  domLayout = 'autoHeight';


  constructor(private httpService: HttpService, private dataService: DataService) {
    this.gridOptions = <GridOptions><unknown>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        editable: true,
        resizable: true
      },
      columnDefs: this.createColumnDefs(),
      rowDefs: this.rowData,
    };

    this.frameworkComponents = { rendererComponent: CountryCellRenderer };

  }

  private createColumnDefs() {
    return [
      { headerName: 'id', field: 'id', editable: false },
      { headerName: 'match_id', field: 'match_id', editable: false },
      { headerName: 'user_id', field: 'user_id', editable: false },
      {
        headerName: '1x2',
        field: '1x2',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['1', 'x', '2']
        }
      },
      {
        headerName: '1x2ht', field: '1x2ht', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['1', 'x', '2']
        }
      },
      {
        headerName: 'ou05', field: 'ou05', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['o 0.5', 'u 0.5', ]
        }
      },
      {
        headerName: 'ou15', field: 'ou15', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['o 1.5', 'u 1.5', ]
        }
      },
      {
        headerName: 'ou25', field: 'ou25', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['o 2.5', 'u 2.5', ]
        }
      },
      {
        headerName: 'ou05ht', field: 'ou05ht', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['o 0.5', 'u 0.5', ]
        }
      },
      {
        headerName: 'ou15ht', field: 'ou15ht', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['o 1.5', 'u 1.5', ]
        }
      },
      {
        headerName: 'ggng', field: 'ggng', editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Porsche', 'Toyota']
        }
      },
      { headerName: 'double_change', field: 'double_change' },
      { headerName: 'status_id', field: 'status_id' },
    ];
  }

  ngOnInit() {
    let data = this.dataService.getPredictionsData();
    if (data && data.length !== 0) {
      this.rowData = this.dataService.getPredictionsData()
    } else {
      this.fetchPredictions();
    }
  }


  ngAfterViewInit(): void {

  }

  fetchPredictions() {
    this.httpService.getPredictions()
      .subscribe((data) => {
        this.rowData = data;
        this.dataService.setPredictionsData(data);
        console.log(this.rowData);
        this.callRefreshAfterMillis();
      }, (error) => {
        console.log(error);
      });
  }

  onGridReady = params => {
    // Following line to make the currently visible columns fit the screen
    this.gridApi = params.api;
    params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    params.api.resetRowHeights();
    this.callRefreshAfterMillis();
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




  callRefreshAfterMillis() {
    setTimeout(() => {
      this.gridApi.refreshCells(this.rowData);
    }, 100);
  }


  onCellValueChanged(params) {
    const colId = params.data.id;
    if (colId === "activite") {
    }
  }


}
