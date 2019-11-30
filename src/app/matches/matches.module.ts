import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRoutingModule } from './matches.routing';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    AgGridModule.withComponents([])

  ],
  declarations: [MatchesComponent]
})
export class MatchesModule { }
