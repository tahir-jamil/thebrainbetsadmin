import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MatchesRoutingModule } from './matches.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { ComponentsModule } from 'app/components/components.module';
import { AddNewMatchesComponent } from './addNewMatches/addNewMatches.component';
import { ModelAddPridictionComponent } from './modelAddPridiction/modelAddPridiction.component';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    AgGridModule.withComponents([]),
    ComponentsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [MatchesComponent, AddNewMatchesComponent, ModelAddPridictionComponent, AccountsComponent],
  entryComponents: [ModelAddPridictionComponent],
  exports: [ModelAddPridictionComponent]
})
export class MatchesModule { }
