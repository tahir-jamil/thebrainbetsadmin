import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { MatchesRoutingModule } from './sports.routing';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    AgGridModule.withComponents([])

  ],
  declarations: [SportsComponent]
})
export class SportsModule { }
