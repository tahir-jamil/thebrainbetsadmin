import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationsComponent } from './nations.component';
import { NationsRoutingModule } from './nations.routing';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  imports: [
    CommonModule,
    NationsRoutingModule,
    AgGridModule.withComponents([])

  ],
  declarations: [NationsComponent]
})
export class NationsModule { }
