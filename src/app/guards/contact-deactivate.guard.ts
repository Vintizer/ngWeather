import { ContactModule } from './../modules/contact/contact.module';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ContactUsComponent } from './../components/contact-us/contact-us.component';

@Injectable({
  providedIn: 'root'
})
export class ContactDeactivateGuard implements CanDeactivate<ContactUsComponent> {
  public canDeactivate(
    component: ContactUsComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !component.isFormEdit() || confirm('You have unsaved date.Are you sure to leave this page?');
  }
}
