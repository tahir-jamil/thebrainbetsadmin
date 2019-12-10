import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { AgGridModule } from '@ag-grid-community/angular';
import { ComponentsModule } from 'app/components/components.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    AgGridModule.withComponents([]),
    ComponentsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
