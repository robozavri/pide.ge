import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
