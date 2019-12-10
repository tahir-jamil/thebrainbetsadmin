import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridOptions } from '@ag-grid-community/all-modules';
import { HttpService } from 'app/services/http.service';
import { DataService } from 'app/services/data.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  sportsGridOptions: any = {};
  nationsGridOptions: any = {};
  championsGridOptions: any = {};

  sports: any = [];
  nations: any = [];
  champions: any = [];

  modules = AllCommunityModules;

  someDataFormTable = {
    'name': '',
    'sign': '',
    'isActive': ''
  }

  sportsPost = {
    'name': '',
    'sign': '',
    'isActive': ''
  }

  championsPost = {
    'name': '',
    'sign': '',
    'isActive': '',
    'nation_id': ''
  }
  nationsPost = {
    'name': '',
    'sign': '',
    'isActive': ''
  }

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
    };

    this.nationsGridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createNationColumnDefs(),
    };

    this.championsGridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      defaultColDef: {
        resizable: true,
      },
      columnDefs: this.createChampionColumnDefs(),
    };
  }


  ngOnInit() {
    this.fetchSports()
    this.fetchChampions()
    this.fetchNations()
  }

  onChange(args) {
    alert(args)
  }

  fetchSports() {
    this.httpService.getSports()
      .subscribe((data) => {
        this.sports = data;
      }, (error) => {
        console.log(error);
      });

  }

  fetchChampions() {
    this.httpService.getChampions()
      .subscribe((data) => {
        this.champions = data;
      }, (error) => {
        console.log(error);
      });
  }

  fetchNations() {

    this.httpService.getNations()
      .subscribe((data) => {
        this.nations = data;
      }, (error) => {
        console.log(error);
      });

  }


  createNewSport() {
    this.httpService.postSports(this.sportsPost).subscribe((data) => {
      console.log(data);
      this.fetchSports()
    }, (error) => {
      console.log(error);
    })
  }

  createChampions() {
    this.httpService.postChampions(this.championsPost).subscribe((data) => {
      this.fetchChampions()
    }, (error) => {
      console.log(error);
    })
  }

  createNations() {
    this.httpService.postNations(this.nationsPost).subscribe((data) => {
      this.fetchNations();
    }, (error) => {
      console.log(error);
    })
  }

  private createColumnDefs() {
    return [
      { field: 'id' },
      { field: 'name' },
      { field: 'sign' },
      { field: 'isActive' },
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
