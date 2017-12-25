import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {RightComponent} from "./right/right.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    RightComponent,
  ]
})
export class PagesModule { }
