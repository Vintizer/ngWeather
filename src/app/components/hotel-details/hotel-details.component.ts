import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from 'src/app/store/reducers';

import { IHotel } from './../../models/hotel';
import { LoadHotel } from './../../store/actions/hotel.actions';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  public hotel$: Observable<IHotel>;
  public constructor(
    private store: Store<IState>
  ) {}

  public ngOnInit(): void {
    this.store.select('router', 'state', 'params', 'id').subscribe((id: string) => {
      this.store.dispatch(new LoadHotel(id));
    });
    this.hotel$ = this.store.select('hotel', 'selectedHotel');
  }
}
