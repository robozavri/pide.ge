import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { FaqPageRoutingModule } from './faq-page-routing.module';
import { FaqPageComponent } from './faq-page.component';

@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqPageRoutingModule,
    SharedModule,
  ],
  exports: [FaqPageComponent]
})
export class FaqPageModule { }
