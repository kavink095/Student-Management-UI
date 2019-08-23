import {HomeLayoutComponent} from './view/home-layout.component';
import {CommonModule} from '@angular/common';
import {HomeLayoutRouterModule} from './home-layout-router.module';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule

  ]
})
export class HomeLayoutModule { }
