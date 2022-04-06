import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PromoComponent } from './components/promo/promo.component';
import { WhyPideComponent } from './components/why-pide/why-pide.component';
import { FriendStoriesComponent } from './components/friend-stories/friend-stories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RequestedWalkersComponent } from './components/requested-walkers/requested-walkers.component';



@NgModule({
  declarations: [HomeComponent, PromoComponent, WhyPideComponent, FriendStoriesComponent, RequestedWalkersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule,
    CarouselModule
  ]
})
export class HomeModule { }
