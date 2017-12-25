import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {UserComponent} from "../pages/user/user.component";
import {RightComponent} from "../pages/right/right.component";

const layoutRoute: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }, {
    path: 'user',
    component: UserComponent
  }, {
    path: 'right',
    component: RightComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      layoutRoute
    )
  ]
})

export class LayoutRoutingModule {
}
