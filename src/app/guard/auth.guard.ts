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
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
