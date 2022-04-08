import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { RequestedWalkerRoutingModule } from './requested-walker-routing.module';
import { RequestedWalkerComponent } from './requested-walker.component';


@NgModule({
  declarations: [RequestedWalkerComponent],
  imports: [
    CommonModule,
    RequestedWalkerRoutingModule,
    SharedModule,
  ],
  exports: [RequestedWalkerComponent]
})
export class RequestedWalkerModule { }
