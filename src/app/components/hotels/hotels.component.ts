import { ActivatedRoute } from '@angular/router';
import { HotelActions, LoadHotels, SetActiveHotel } from './../../store/actions/hotel.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { HotelsService } from '../../hotels.service';
import { IHotel } from '../../models/hotel';
import {
  activeHotelsSelector,
  filteredHotelsSelector,
  IHotelState
} from './../../store/reducers/hotel.reducer';
import { combineLatest } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  public hotels: IHotel[] = [];
  public activeHotel$: Observable<IHotel>;
  public isFirstLoadDone: boolean = false;
  public isAdminVal: boolean;
  public hotels$: Observable<IHotel[]>;
  public filteredHotels$: Observable<IHotel[]>;
  public filter$: Observable<any>;
  private subscription: Subscription;

  public constructor(
    private hotelsService: HotelsService,
    private store: Store<IHotelState>,
    private ar: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const pageParams: { pageIndex?: string; pageSize?: string } = (this.ar
      .params as BehaviorSubject<any>).value;
    const page: number = Number(pageParams.pageIndex || '0');
    const limit: number = Number(pageParams.pageSize || '20');
    this.store
      .select('hotel', 'data')
      .pipe(take(2))
      .subscribe(
        (hotels: IHotel[]) =>
          (this.isFirstLoadDone = hotels.length ? true : false)
      );
    this.hotels$ = this.store.select('hotel', 'data');
    this.filter$ = this.store.select('hotel', 'filter');
    this.activeHotel$ = this.store.select(activeHotelsSelector);
    this.filteredHotels$ = this.store.pipe(select(filteredHotelsSelector));
    this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
    this.store.dispatch(new LoadHotels({ page, limit }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
