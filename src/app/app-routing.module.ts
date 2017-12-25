import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: LayoutComponent,
    loadChildren:'app/layout/layout.module#LayoutModule'
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ]
})

export class AppRoutingModule {
}
