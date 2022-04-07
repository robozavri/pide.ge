import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqsRoutingModule } from './faqs-routing.module';



@NgModule({
  declarations: [FaqsComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class FaqsModule { }
