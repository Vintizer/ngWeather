import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { HotelContactsComponent } from './../components/hotel-contacts/hotel-contacts.component';

@Injectable({
  providedIn: 'root'
})
export class ContactDeactivateGuard implements CanDeactivate<HotelContactsComponent> {
  public canDeactivate(
    component: HotelContactsComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !component.isFormEdit() || confirm('You have unsaved date.Are you sure to leave this page?');
  }
}
