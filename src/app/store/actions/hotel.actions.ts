import { Action } from '@ngrx/store';

export enum HotelActionTypes {
  LoadHotels = '[Hotel] Load Hotels',
  LoadHotelsSuccess = '[Hotel] Load Hotels Success',
  LoadHotelsError = '[Hotel] Load Hotels Error'
}

export class LoadHotels implements Action {
  public readonly type: HotelActionTypes.LoadHotels = HotelActionTypes.LoadHotels;
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelsSuccess implements Action {
  public readonly type: HotelActionTypes.LoadHotelsSuccess = HotelActionTypes.LoadHotelsSuccess;
  public constructor(public payload: any) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelsError implements Action {
  public readonly type: HotelActionTypes.LoadHotelsError = HotelActionTypes.LoadHotelsError;
  public constructor(public payload: any) {}
}

export type HotelActions = LoadHotels | LoadHotelsSuccess | LoadHotelsError;

