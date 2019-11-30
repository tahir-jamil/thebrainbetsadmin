import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PredictionsComponent } from './predictions.component';

const routes: Routes = [
  {
    path: '',
    component: PredictionsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class PredictionsRoutingModule { }
