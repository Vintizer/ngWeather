import { IHotel } from './../../models/hotel';
import { Action } from '@ngrx/store';

export enum HotelActionTypes {
  LoadHotels = '[Hotel] Load Hotels',
  LoadHotelsSuccess = '[Hotel] Load Hotels Success',
  LoadHotelsError = '[Hotel] Load Hotels Error',
  SetTextFilter = '[Hotel] Set Text Filter',
  SetStarFilter = '[Hotel] Set Star Filter',
  SetActiveHotel = '[Hotel] Set Active Hotel'
}
interface IPageHotels {
  page: number;
  limit: number;
}
export class LoadHotels implements Action {
  public readonly type: HotelActionTypes.LoadHotels =
    HotelActionTypes.LoadHotels;
  public constructor(public payload: IPageHotels = { page: 0, limit: 20 }) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelsSuccess implements Action {
  public readonly type: HotelActionTypes.LoadHotelsSuccess =
    HotelActionTypes.LoadHotelsSuccess;
  public constructor(public payload: IHotel[]) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelsError implements Action {
  public readonly type: HotelActionTypes.LoadHotelsError =
    HotelActionTypes.LoadHotelsError;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class SetTextFilter implements Action {
  public readonly type: HotelActionTypes.SetTextFilter =
    HotelActionTypes.SetTextFilter;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class SetStarFilter implements Action {
  public readonly type: HotelActionTypes.SetStarFilter =
    HotelActionTypes.SetStarFilter;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class SetActiveHotel implements Action {
  public readonly type: HotelActionTypes.SetActiveHotel =
    HotelActionTypes.SetActiveHotel;
  public constructor(public payload: number) {}
}

export type HotelActions =
  | LoadHotels
  | LoadHotelsSuccess
  | LoadHotelsError
  | SetStarFilter
  | SetTextFilter
  | SetActiveHotel;
