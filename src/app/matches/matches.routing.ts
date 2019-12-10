import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches.component';
import { AddNewMatchesComponent } from './addNewMatches/addNewMatches.component';
const routes: Routes = [
  {
    path: 'addNewMatches',
    component: AddNewMatchesComponent
  },
  {
    path: '',
    component: MatchesComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class MatchesRoutingModule { }
