import { ActivatedRoute } from '@angular/router';
import { HotelActions, LoadHotels } from './../../store/actions/hotel.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { HotelsService } from '../../hotels.service';
import { IHotel } from '../../models/hotel';
import { State } from './../../store/reducers/hotel.reducer';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  public hotels: IHotel[] = [];
  public activeHotel: IHotel;
  public isFirstLoadDone: boolean = false;
  public isAdminVal: boolean;
  public hotels$: Observable<IHotel[]>;
  public filteredHotels: IHotel[] = [];
  public filter$: Observable<any>;
  private subscription: Subscription;

  public constructor(
    private hotelsService: HotelsService,
    private store: Store<State>,
    private ar: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const pageParams: { pageIndex?: string; pageSize?: string } = (this.ar
      .params as BehaviorSubject<any>).value;
    const page: number = Number(pageParams.pageIndex || '0');
    const limit: number = Number(pageParams.pageSize || '0');
    // this.subscription = this.hotelsService.hotels$.subscribe(
    //   (data: IHotel[]) => {
    //     this.hotels = data;
    //     this.filteredHotels = data;
    //     this.activeHotel = data[0];
    //     this.isFirstLoadDone = true;
    //   }
    // );
    this.hotels$ = this.store.select('hotel', 'data');
    this.filter$ = this.store.select('hotel', 'filter');
    combineLatest(
      this.hotels$,
      this.filter$,
      (
        hotels: IHotel[],
        filter: {
          text: string;
          star: string[];
        }
      ) => {
        return hotels.filter((hotel: IHotel) => {
          const isStarEquals: boolean = filter.star.includes(
            hotel.stars.toString()
          );
          const isTextEqual: boolean =
            hotel.description
              .toUpperCase()
              .includes(filter.text.toUpperCase()) ||
            hotel.title.toUpperCase().includes(filter.text.toUpperCase());
          return isStarEquals && isTextEqual;
        });
      }
    ).subscribe(
      (filteredHotels: IHotel[]) => (this.filteredHotels = filteredHotels)
    );
    this.activeHotel = this.hotels.find((hotel: IHotel) => hotel.id === 0);
    this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
    this.store.dispatch(new LoadHotels({ page, limit }));
  }

  public setActiveHotel(hotel: IHotel): void {
    this.activeHotel = hotel;
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
