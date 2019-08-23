import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeLayoutComponent} from './view/home-layout.component';

const routes = [
  {
    path : '',
    component : HomeLayoutComponent,
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeLayoutRouterModule {
}
