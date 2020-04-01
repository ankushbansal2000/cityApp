import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {



  public static routerRef: Router;
  constructor(public router: Router) { 
    LayoutComponent.routerRef = this.router;
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/city']);
    }
  }

}
