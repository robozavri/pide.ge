import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPetsRoutingModule } from './my-pets-routing.module';
import { MyPetsComponent } from './my-pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MyPetsComponent],
  imports: [
    CommonModule,
    MyPetsRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class MyPetsModule { }
