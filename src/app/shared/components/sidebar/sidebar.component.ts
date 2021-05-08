import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nav, NAV_MODEL } from 'src/app/config/header';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dataSource: Nav[];

  constructor(
    private router: Router
  ) {
    this.dataSource = NAV_MODEL;
  }

  ngOnInit() {
  }

  updateUrl(nav){
    this.router.navigate([nav.url]);
  }

}
