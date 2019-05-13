import { RemoveFavoriteHotels } from './../actions/favorite-hotel.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HotelsService } from 'src/app/hotels.service';

import { IHotel } from './../../models/hotel';
import {
  HotelActions,
  HotelActionTypes,
  LoadAllHotelsError,
  LoadAllHotelsSuccess,
  LoadHotelsError,
  LoadHotelsSuccess,
  RemoveHotelsError,
  RemoveHotelsSuccess
} from './../actions/hotel.actions';
import { IState } from '../reducers';

@Injectable()
export class HotelEffects {
  @Effect()
  public loadHotels$: Observable<
    LoadHotelsSuccess | LoadHotelsError
  > = this.actions$.pipe(
    ofType(HotelActionTypes.LoadHotels),
    mergeMap(({ payload }) =>
      this.hotelsService.getHotelsObservable(payload.page, payload.limit).pipe(
        map((hotels: IHotel[]) => new LoadHotelsSuccess(hotels)),
        catchError((err: string) => of(new LoadHotelsError(err)))
      )
    )
  );

  @Effect()
  public loadAllHotels$: Observable<
    LoadAllHotelsSuccess | LoadAllHotelsError
  > = this.actions$.pipe(
    ofType(HotelActionTypes.LoadAllHotels),
    mergeMap(() =>
      this.hotelsService.getAllHotels().pipe(
        tap(console.log),
        map((hotels: IHotel[]) => new LoadAllHotelsSuccess(hotels)),
        catchError((err: string) => of(new LoadAllHotelsError(err)))
      )
    )
  );

  @Effect()
  public removeHotels$: Observable<
    RemoveHotelsSuccess | RemoveHotelsError
  > = this.actions$.pipe(
    ofType(HotelActionTypes.RemoveHotels),
    mergeMap(({ payload: hotelId }: { payload: number }) =>
      this.hotelsService.removeHotel(hotelId).pipe(
        tap(() => this.store.dispatch(new RemoveFavoriteHotels(hotelId))),
        map(() => new RemoveHotelsSuccess(hotelId)),
        catchError((err: string) => of(new RemoveHotelsError(err)))
      )
    )
  );

  public constructor(
    private actions$: Actions<HotelActions>,
    private hotelsService: HotelsService,
    private store: Store<IState>
  ) {}
}
