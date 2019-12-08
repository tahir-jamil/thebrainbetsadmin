import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsComponent } from './champions.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ChampionsRoutingModule { }
