import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestedWalkersComponent } from './requested-walkers.component';

const routes: Routes = [{
  path: '',
  component: RequestedWalkersComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedWalkersRoutingModule { }
