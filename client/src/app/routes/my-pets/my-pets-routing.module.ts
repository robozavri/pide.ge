import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPetsComponent } from './my-pets.component';


const routes: Routes = [{
  path: '',
  component: MyPetsComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPetsRoutingModule { }
