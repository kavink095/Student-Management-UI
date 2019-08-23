import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'src/app/view/layout/home-layout/home-layout.module#HomeLayoutModule'
  },
  {
    path: 'login',
    loadChildren: 'src/app/view/layout/login-layout/login-layout.module#LoginLayoutModule'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
