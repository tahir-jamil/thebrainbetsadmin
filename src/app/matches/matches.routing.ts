import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches.component';
import { AddNewMatchesComponent } from './addNewMatches/addNewMatches.component';
import { AccountsComponent } from './accounts/accounts.component';
const routes: Routes = [
  {
    path: 'addNewMatches',
    component: AddNewMatchesComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
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
