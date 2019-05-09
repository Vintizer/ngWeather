import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HotelsService } from 'src/app/hotels.service';

import { IHotel } from './../../models/hotel';
import { HotelActions, HotelActionTypes, LoadHotelsError, LoadHotelsSuccess } from './../actions/hotel.actions';


@Injectable()
export class HotelEffects {

  @Effect()
  public loadUsers$: Observable<LoadHotelsSuccess | LoadHotelsError> = this.actions$.pipe(
    ofType(HotelActionTypes.LoadHotels),
    tap(console.log),
    mergeMap(({payload}) => this.hotelsService.getHotelsObservable(payload.page, payload.limit)
        .pipe(
          map((hotels: IHotel[]) => new LoadHotelsSuccess(hotels)),
          catchError((err: any) => of(new LoadHotelsError(err)))
        ))
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
  );


  public constructor(
    private actions$: Actions<HotelActions>,
    private hotelsService: HotelsService
    ) {}

}
