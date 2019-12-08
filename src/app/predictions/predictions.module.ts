import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions.component';
import { PredictionsRoutingModule } from './predictions.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PredictionsRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  declarations: [PredictionsComponent, ]
})
export class PredictionsModule { }