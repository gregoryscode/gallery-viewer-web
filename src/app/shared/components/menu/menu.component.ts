import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  panelOpenState: boolean = false;
  menuHomeItems: Array<Menu> = [];

  constructor() {
    
  }

  ngOnInit() {
    this.createMenuItems();
  }

  createMenuItems() {
    this.menuHomeItems = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        route: '',
        children: [],
        membership: []
      }
    ];
  }
}
