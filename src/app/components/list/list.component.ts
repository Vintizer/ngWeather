import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { favHotelSelector } from 'src/app/store/reducers/favorite-hotel.reducer';

import * as RouterActions from '../../store/actions/router.actions';
import { IHotel, IHotelView } from './../../models/hotel';
import {
  AddFavoriteHotels,
  VoteFavoriteHotels
} from './../../store/actions/favorite-hotel.actions';
import {
  LoadHotels,
  RemoveHotels,
  SetActiveHotel
} from './../../store/actions/hotel.actions';
import { IState } from './../../store/reducers';
import { activeHotelsSelector } from './../../store/reducers/hotel.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public hotels: IHotel[] = [];
  public activeHotel$: Observable<IHotel>;
  @Input() public isLoaded: boolean;

  @Output() public setActive: EventEmitter<IHotel> = new EventEmitter();
  @Output() public favoriteAdded: EventEmitter<true> = new EventEmitter();
  public hotelsLength$: Observable<number>;
  public isAdmin: boolean;
  public pageIndex$: Observable<number>;
  public pageSize$: Observable<number>;

  public constructor(private store: Store<IState>) {}

  public ngOnInit(): void {
    this.pageIndex$ = this.store.select(
      'router',
      'state',
      'params',
      'pageIndex'
    );
    this.pageSize$ = this.store.select('router', 'state', 'params', 'pageSize');
    this.isAdmin = Boolean(sessionStorage.getItem('isAdmin'));
    this.activeHotel$ = this.store.select(activeHotelsSelector);
    this.hotelsLength$ = this.store.select('hotel', 'hotelsCount');
  }
  public setActiveHotel(hotel: IHotel): void {
    this.store.dispatch(new SetActiveHotel(hotel.id));
  }
  public addHotelToFavorites(curHotel: IHotel, event: MouseEvent): void {
    event.stopPropagation();
    const { title, id } = this.hotels.find(
      (hotel: IHotel) => hotel.id === curHotel.id
    );
    const favoriteView: IHotelView = {
      title,
      id
    };
    this.store.dispatch(new AddFavoriteHotels(favoriteView));
  }
  public voteHotelToFavorites(curHotel: IHotel, event: MouseEvent): void {
    event.stopPropagation();
    const { title, id } = this.hotels.find(
      (hotel: IHotel) => hotel.id === curHotel.id
    );
    const favoriteView: IHotelView = {
      title,
      id
    };
    this.store.dispatch(new VoteFavoriteHotels(curHotel.id));
  }
  public trackHotelsByFn(_i: number, hotel: IHotel): number {
    return hotel.id;
  }
  public trackPicturesByFn(_i: number, src: string): string {
    return src;
  }
  public isHotelInFavorite(hotel: IHotel): Observable<boolean> {
    return this.store.select(favHotelSelector, hotel.id);
  }
  public goToPage(e: any): void {
    const { pageIndex, pageSize } = e;
    this.store.dispatch(
      new RouterActions.Go({
        path: ['/hotels', { pageIndex, pageSize }],
        extras: { replaceUrl: false }
      })
    );
    this.store.dispatch(new LoadHotels({ page: pageIndex, limit: pageSize }));
  }
  public removeHotel(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(new RemoveHotels(id));
  }
}
