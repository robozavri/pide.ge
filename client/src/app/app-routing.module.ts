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
				path: 'login',
				loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule)
			},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
