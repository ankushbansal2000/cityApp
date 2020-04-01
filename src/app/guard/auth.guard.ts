import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate() {
    if (sessionStorage.getItem('token')) {
      console.log("if");
      return true;
    }
    else {
      console.log("else");
      this.router.navigate(['/login']);
      return false;
    }
  }

}
