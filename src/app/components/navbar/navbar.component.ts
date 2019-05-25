import { LoadFavoriteHotels } from './../../store/actions/favorite-hotel.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/store/reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isAdminVal: boolean;
  public constructor(
    private store: Store<IState>
  ) { }

  public ngOnInit(): void {
    this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
    this.store.dispatch(new LoadFavoriteHotels());
  }
  public iAdmin(): void {
    if (this.isAdminVal) {
      sessionStorage.removeItem('isAdmin');
    } else {
      sessionStorage.setItem('isAdmin', 'IAmASuperAdmin');
    }
    location.reload();
  }
}
