import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateBetsComponent } from './generateBets.component';
import { GenerateBetsRoutingModule } from './generateBets.routing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { AgGridModule } from '@ag-grid-community/angular';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    GenerateBetsRoutingModule,
    AgGridModule.withComponents([]),
    ComponentsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [GenerateBetsComponent]
})
export class GenerateBetsModule { }
