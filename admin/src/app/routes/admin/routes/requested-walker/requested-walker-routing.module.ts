import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestedWalkerComponent } from './requested-walker.component';

const routes: Routes = [
  {
    path: '',
    component: RequestedWalkerComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedWalkerRoutingModule { }
