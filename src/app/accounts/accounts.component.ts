import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import { HttpService } from 'app/services/http.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  sportsGridOptions: any = {};
  nationsGridOptions: any = {};
  championsGridOptions: any = {};
  studentList = {};

  sports: any = [];
  nations: any = [];
  champions: any = [];

  modules = AllCommunityModules;


  domLayout = 'autoHeight';


  constructor(private httpService: HttpService, private dataService: DataService) {
    this.sportsGridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createColumnDefs(),
      rowDefs: this.studentList,
    };

    this.nationsGridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createNationColumnDefs(),
      rowDefs: this.studentList,
    };

    this.championsGridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createChampionColumnDefs(),
      rowDefs: this.studentList,
    };
  }


  ngOnInit() {
    this.fetchMatches();
  }

  fetchMatches() {
    this.httpService.getSports()
      .subscribe((data) => {
        this.sports = data;
      }, (error) => {
        console.log(error);
      });

    this.httpService.getNations()
      .subscribe((data) => {
        this.nations = data;
      }, (error) => {
        console.log(error);
      });

    this.httpService.getChampions()
      .subscribe((data) => {
        this.champions = data;
      }, (error) => {
        console.log(error);
      });
  }

  private createColumnDefs() {
    return [
      { field: 'id' },
      { field: 'name' },
      { field: 'sign' },
    ]
  }

  private createNationColumnDefs() {
    return [
      { field: 'id' },
      { field: 'name' },
      { field: 'sign' },
      { field: 'isActive' },
    ]
  }

  private createChampionColumnDefs() {
    return [
      { field: 'id' },
      { field: 'name' },
      { field: 'sign' },
      { field: 'nation_id' },
    ]
  }


  onGridReady = (params) => {
    // Following line to make the currently visible columns fit the screen
    // params.api.autoSizeColumns();

    // Following line dymanic set height to row on content
    // params.api.resetRowHeights();
  };


  filterData(data) {
    data.filter((item) => {
      if (item.Champion === 'ACAFL') {
        item.Champion = 1;
      }
    })
  }


}
