import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions.component';
import { PredictionsRoutingModule } from './predictions.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import { DropdownCellRendererComponent } from './dropdown-cell-renderer/dropdown-cell-renderer.component';

@NgModule({
  imports: [
    CommonModule,
    PredictionsRoutingModule,
    AgGridModule.withComponents([DropdownCellRendererComponent]),
    HttpClientModule
  ],
  declarations: [PredictionsComponent, DropdownCellRendererComponent]
})
export class PredictionsModule { }
