import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './view/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginLayoutRouterModule { }
