import { NotificationsService } from 'angular2-notifications';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import {
  catchError,
  find,
  map,
  mergeMap,
  switchMap,
  tap
} from 'rxjs/operators';

import { IFavoriteView, IHotelView } from './../../models/hotel';
import { FavoriteService } from './../../services/favorite-service.service';
import {
  AddFavoriteHotelsFailure,
  AddFavoriteHotelsSuccess,
  FavoriteHotelActionTypes,
  LoadFavoriteHotelsFailure,
  LoadFavoriteHotelsSuccess,
  RemoveFavoriteHotelsFailure,
  RemoveFavoriteHotelsSuccess,
  VoteFavoriteHotelsFailure,
  VoteFavoriteHotelsSuccess
} from './../actions/favorite-hotel.actions';
import { IState } from '../reducers';

@Injectable()
export class FavoriteHotelEffects {
  @Effect()
  public loadFavorites$: Observable<
    LoadFavoriteHotelsSuccess | LoadFavoriteHotelsFailure
  > = this.actions$.pipe(
    ofType(FavoriteHotelActionTypes.LoadFavoriteHotels),
    mergeMap(() =>
      this.favService.getFavorites().pipe(
        map((hotels: IFavoriteView[]) => new LoadFavoriteHotelsSuccess(hotels)),
        catchError((err: string) => of(new LoadFavoriteHotelsFailure(err)))
      )
    )
  );

  @Effect()
  public addToFavorites$: Observable<
    AddFavoriteHotelsSuccess | AddFavoriteHotelsFailure
  > = this.actions$.pipe(
    ofType(FavoriteHotelActionTypes.AddFavoriteHotels),
    mergeMap(({ payload: hotel }: { payload: IHotelView }) =>
      this.favService.addFavorite(hotel).pipe(
        tap(() => this.addFavoriteNotification.bind(this)()),
        map(
          (favHotel: IFavoriteView) => new AddFavoriteHotelsSuccess(favHotel)
        ),
        catchError((err: string) => of(new AddFavoriteHotelsFailure(err)))
      )
    )
  );

  @Effect()
  public voteFavorite$: Observable<
    VoteFavoriteHotelsSuccess | VoteFavoriteHotelsFailure
  > = this.actions$.pipe(
    ofType(FavoriteHotelActionTypes.VoteFavoriteHotels),
    mergeMap(({ payload: hotelId }: { payload: number }) =>
      this.store.select('favoriteHotel', 'data').pipe(
        switchMap((favHotels: IFavoriteView[]) => from(favHotels)),
        find((favHotel: IFavoriteView) => favHotel.id === hotelId),
        switchMap((hotel: IFavoriteView) =>
          this.favService.voteFavorite(hotel).pipe(
        tap(() => this.voteFavoriteNotification.bind(this)()),
            map(
              (favHotel: IFavoriteView) =>
                new VoteFavoriteHotelsSuccess(favHotel)
            ),
            catchError((err: string) => of(new VoteFavoriteHotelsFailure(err)))
          )
        )
      )
    )
  );

  @Effect()
  public removeFromFavorites$: Observable<
    RemoveFavoriteHotelsSuccess | RemoveFavoriteHotelsFailure
  > = this.actions$.pipe(
    ofType(FavoriteHotelActionTypes.RemoveFavoriteHotels),
    mergeMap(({ payload: hotelId }: { payload: number }) =>
      this.favService.removeFromFavorites(hotelId).pipe(
        tap(() => this.removeFavoriteNotification.bind(this)()),
        map(() => new RemoveFavoriteHotelsSuccess(hotelId)),
        catchError((err: string) => of(new RemoveFavoriteHotelsFailure(err)))
      )
    )
  );

  public constructor(
    private actions$: Actions,
    private favService: FavoriteService,
    private store: Store<IState>,
    private ns: NotificationsService
  ) {}
  public addFavoriteNotification(): void {
    this.ns.success('Favorite added!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
  public removeFavoriteNotification(): void {
    this.ns.warn('Favorite removed!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
  public voteFavoriteNotification(): void {
    this.ns.info('Your vote has been counted!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
}
