import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuardService } from './admin-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'faqs',
    pathMatch: 'full',
    canActivate: [AdminGuardService],
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuardService],
    children: [
      {
        path: 'promo',
        loadChildren: './routes/promo/promo.module#PromoModule'
      },
      {
        path: 'contact',
        loadChildren: './routes/contact/contact.module#ContactModule'
      },
      {
        path: 'privacy',
        loadChildren: './routes/privacy/privacy.module#PrivacyModule'
      },
      {
        path: 'policy',
        loadChildren: './routes/policy/policy.module#PolicyModule'
      },
      {
        path: 'about-us',
        loadChildren: './routes/about-us/about-us.module#AboutUsModule'
      },
      {
        path: 'faq-page',
        loadChildren: './routes/faq-page/faq-page.module#FaqPageModule'
      },
      {
        path: 'walkers',
        loadChildren: './routes/requested-walkers/requested-walkers.module#RequestedWalkersModule'
      },
      {
        path: 'walker/:id',
        loadChildren: './routes/requested-walker/requested-walker.module#RequestedWalkerModule'
      },
      {
        path: 'stories',
        loadChildren: './routes/stories/stories.module#StoriesModule'
      },
      {
        path: 'faqs',
        loadChildren: './routes/faqs/faqs.module#FaqsModule'
      },
      {
        path: 'faq/:id',
        loadChildren: './routes/faq/faq.module#FaqModule'
      },
      {
        path: 'meta',
        loadChildren: './routes/meta/meta.module#MetaModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
