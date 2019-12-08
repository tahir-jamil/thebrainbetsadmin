import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports.routing';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  imports: [
    CommonModule,
    SportsRoutingModule,
    AgGridModule.withComponents([])

  ],
  declarations: [SportsComponent]
})
export class SportsModule { }
