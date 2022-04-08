import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [FaqsComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [],
})
export class FaqsModule { }
