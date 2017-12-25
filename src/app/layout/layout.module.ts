import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LayoutRoutingModule} from "./layout-routing.module";
import {PagesModule} from "../pages/pages.module";
import {LayoutComponent} from "./layout.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule,
    LayoutRoutingModule,
    PagesModule
  ],
  declarations: [
    LayoutComponent,
  ]
})
export class LayoutModule {
}
