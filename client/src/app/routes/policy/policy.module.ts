import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';


@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class PolicyModule { }
