import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champions.routing';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [ChampionsComponent]
})
export class ChampionsModule { }
