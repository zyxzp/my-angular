import { Component, OnInit } from '@angular/core';
import {MENU} from "./mock-menu";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menus:any[];
  constructor() { }

  ngOnInit() {
    this.menus=MENU;
  }

}
