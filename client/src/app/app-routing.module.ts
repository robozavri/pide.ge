import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		children: [
			{
				path: '',
				loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'home',
				loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'about-us',
				loadChildren: () => import('./routes/about-us/about-us.module').then(m => m.AboutUsModule)
			},
			{
				path: 'policy',
				loadChildren: () => import('./routes/policy/policy.module').then(m => m.PolicyModule)
			},
			{
				path: 'privacy',
				loadChildren: () => import('./routes/privacy/privacy.module').then(m => m.PrivacyModule)
			},
			{
				path: 'faq',
				loadChildren: () => import('./routes/faqs/faqs.module').then(m => m.FaqsModule)
			},
			{
				path: 'login',
				loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule)
			},
			{
				path: 'registration',
				loadChildren: () => import('./routes/registration/registration.module').then(m => m.RegistrationModule)
			},
			{
				path: 'profile',
				loadChildren: () => import('./routes/profile/profile.module').then(m => m.ProfileModule)
			},
			{
				path: 'order/create',
				loadChildren: () => import('./routes/create-order/create-order.module').then(m => m.CreateOrderModule)
			},
			{
				path: 'my/pets',
				loadChildren: () => import('./routes/my-pets/my-pets.module').then(m => m.MyPetsModule)
			},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
