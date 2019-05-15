import { IState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import * as RouterActions from '../store/actions/router.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  public isAdminVal: boolean = Boolean(sessionStorage.getItem('isAdmin'));
  public constructor(private store: Store<IState>) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdminVal) {
      return true;
    } else {
      this.store.dispatch(
        new RouterActions.Go({
          path: [''],
          extras: { replaceUrl: false }
        })
      );
      return false;
    }
  }
}
