import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { RequestedWalkersRoutingModule } from './requested-walkers-routing.module';
import { RequestedWalkersComponent } from './requested-walkers.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [RequestedWalkersComponent],
  imports: [
    CommonModule,
    RequestedWalkersRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [],
})
export class RequestedWalkersModule { }
