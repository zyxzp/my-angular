import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from '@angular/router';

//布局module
import {LayoutModule} from "./layout/layout.module";
import {PagesModule} from "./pages/pages.module";

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    LayoutModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
