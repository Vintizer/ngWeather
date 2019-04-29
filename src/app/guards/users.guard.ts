import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  public isAdminVal: boolean = Boolean(sessionStorage.getItem('isAdmin'));
  public constructor(private router: Router) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdminVal) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
