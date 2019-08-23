import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginLayoutRouterModule} from './login-layout-router.module';
import {LoginLayoutComponent} from './view/login-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    CommonModule,
    LoginLayoutRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule {
}
