import { IHotel } from './../../models/hotel';
import { Action } from '@ngrx/store';

export enum HotelActionTypes {
  LoadHotels = '[Hotel] Load Hotels',
  LoadHotelsSuccess = '[Hotel] Load Hotels Success',
  LoadHotelsError = '[Hotel] Load Hotels Error',
  LoadHotel = '[Hotel] Load Hotel',
  LoadHotelSuccess = '[Hotel] Load Hotel Success',
  LoadHotelError = '[Hotel] Load Hotel Error',
  LoadAllHotels = '[Hotel] Load All Hotels',
  LoadAllHotelsSuccess = '[Hotel] Load Hotels All Success',
  LoadAllHotelsError = '[Hotel] Load Hotels All Error',
  RemoveHotels = '[Hotel] Remove Hotels',
  RemoveHotelsSuccess = '[Hotel] Remove Hotels Success',
  RemoveHotelsError = '[Hotel] Remove Hotels Error',
  SetTextFilter = '[Hotel] Set Text Filter',
  SetStarFilter = '[Hotel] Set Star Filter',
  SetActiveHotel = '[Hotel] Set Active Hotel'
}
interface IPageHotels {
  page: number;
  limit: number;
}
// tslint:disable-next-line: max-classes-per-file
export class RemoveHotels implements Action {
  public readonly type: HotelActionTypes.RemoveHotels =
    HotelActionTypes.RemoveHotels;
  public constructor(public payload: number) {}
}
// tslint:disable-next-line: max-classes-per-file
export class RemoveHotelsSuccess implements Action {
  public readonly type: HotelActionTypes.RemoveHotelsSuccess =
    HotelActionTypes.RemoveHotelsSuccess;
  public constructor(public payload: number) {}
}
// tslint:disable-next-line: max-classes-per-file
export class RemoveHotelsError implements Action {
  public readonly type: HotelActionTypes.RemoveHotelsError =
    HotelActionTypes.RemoveHotelsError;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
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
export class LoadHotel implements Action {
  public readonly type: HotelActionTypes.LoadHotel = HotelActionTypes.LoadHotel;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelSuccess implements Action {
  public readonly type: HotelActionTypes.LoadHotelSuccess =
    HotelActionTypes.LoadHotelSuccess;
  public constructor(public payload: IHotel) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadHotelError implements Action {
  public readonly type: HotelActionTypes.LoadHotelError =
    HotelActionTypes.LoadHotelError;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadAllHotels implements Action {
  public readonly type: HotelActionTypes.LoadAllHotels =
    HotelActionTypes.LoadAllHotels;
}
// tslint:disable-next-line: max-classes-per-file
export class LoadAllHotelsSuccess implements Action {
  public readonly type: HotelActionTypes.LoadAllHotelsSuccess =
    HotelActionTypes.LoadAllHotelsSuccess;
  public constructor(public payload: IHotel[]) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoadAllHotelsError implements Action {
  public readonly type: HotelActionTypes.LoadAllHotelsError =
    HotelActionTypes.LoadAllHotelsError;
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
  | LoadHotel
  | LoadHotelSuccess
  | LoadHotelError
  | LoadAllHotels
  | LoadAllHotelsSuccess
  | LoadAllHotelsError
  | RemoveHotels
  | RemoveHotelsSuccess
  | RemoveHotelsError
  | SetStarFilter
  | SetTextFilter
  | SetActiveHotel;
