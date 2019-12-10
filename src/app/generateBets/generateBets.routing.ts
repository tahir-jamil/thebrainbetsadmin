import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateBetsComponent } from './generateBets.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateBetsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class GenerateBetsRoutingModule { }
