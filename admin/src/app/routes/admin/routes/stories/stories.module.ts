import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [],
})
export class StoriesModule { }
