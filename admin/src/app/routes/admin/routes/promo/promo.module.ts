import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { PromoRoutingModule } from './promo-routing.module';
import { PromoComponent } from './promo.component';

@NgModule({
  declarations: [PromoComponent],
  imports: [
    CommonModule,
    PromoRoutingModule,
    SharedModule,
  ],
  exports: [PromoComponent]
})
export class PromoModule { }
