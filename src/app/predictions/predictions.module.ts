import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions.component';
import { PredictionsRoutingModule } from './predictions.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'app/components/components.module';
import { MatchesModule } from 'app/matches/matches.module';

@NgModule({
  imports: [
    CommonModule,
    PredictionsRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ComponentsModule,
    MatchesModule
  ],
  declarations: [PredictionsComponent, ]
})
export class PredictionsModule { }
