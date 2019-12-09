import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRoutingModule } from './matches.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { ComponentsModule } from 'app/components/components.module';
import { AddNewMatchesComponent } from './addNewMatches/addNewMatches.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    AgGridModule.withComponents([]),
    ComponentsModule
  ],
  declarations: [MatchesComponent, AddNewMatchesComponent]
})
export class MatchesModule { }
