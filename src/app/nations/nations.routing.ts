import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationsComponent } from './nations.component';

const routes: Routes = [
  {
    path: '',
    component: NationsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class NationsRoutingModule { }
