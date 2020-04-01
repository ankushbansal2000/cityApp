import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmission: boolean;
  constructor() { }

  ngOnInit() {
  }
  permissionAdmin() {
    if(!this.isAdmission) {
      this.isAdmission = true;
    } else {
      this.isAdmission = false;
    }

  }

}
